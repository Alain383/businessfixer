import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';

dotenv.config();

const ADMIN_USER = process.env.ADMIN_USER || 'Alain';
const ADMIN_PASS = process.env.ADMIN_PASS || 'Mahant0506@';
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'dev-secret-change-me';

const app = express();
app.use(cors());
app.use(express.json({ limit: '5mb' }));

const UPLOAD_DIR = path.resolve(process.cwd(), 'server', 'uploads');
const MEDIA_FILE = path.resolve(process.cwd(), 'server', 'media.json');

if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
if (!fs.existsSync(MEDIA_FILE)) fs.writeFileSync(MEDIA_FILE, JSON.stringify([]));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random()*1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  }
});
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

function readMedia() {
  try {
    const raw = fs.readFileSync(MEDIA_FILE, 'utf8');
    return JSON.parse(raw || '[]');
  } catch (e) { return []; }
}
function writeMedia(data) {
  fs.writeFileSync(MEDIA_FILE, JSON.stringify(data, null, 2));
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = jwt.sign({ user: username }, JWT_SECRET, { expiresIn: '12h' });
    return res.json({ token });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.post('/api/validate', (req, res) => {
  const auth = req.headers.authorization?.split(' ')[1];
  if (!auth) return res.status(401).json({ ok: false });
  try {
    jwt.verify(auth, JWT_SECRET);
    return res.json({ ok: true });
  } catch (e) { return res.status(401).json({ ok: false }); }
});

app.get('/api/media', (req, res) => {
  const media = readMedia();
  const files = media.map(m => ({ ...m, url: `/uploads/${m.filename}` }));
  res.json(files);
});

app.post('/api/media', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const media = readMedia();
  const id = Date.now().toString();
  const entry = {
    id,
    filename: req.file.filename,
    originalName: req.file.originalname,
    uploadedAt: new Date().toISOString(),
    meta: req.body.meta ? JSON.parse(req.body.meta) : {}
  };
  media.unshift(entry);
  writeMedia(media);
  res.json({ ...entry, url: `/uploads/${entry.filename}` });
});

app.put('/api/media/:id', (req, res) => {
  const { id } = req.params;
  const media = readMedia();
  const idx = media.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  media[idx] = { ...media[idx], meta: { ...(media[idx].meta||{}), ...(req.body.meta||{}) } };
  writeMedia(media);
  res.json(media[idx]);
});

app.delete('/api/media/:id', (req, res) => {
  const { id } = req.params;
  const media = readMedia();
  const idx = media.findIndex(m => m.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  const [entry] = media.splice(idx, 1);
  writeMedia(media);
  const filePath = path.join(UPLOAD_DIR, entry.filename);
  try { if (fs.existsSync(filePath)) fs.unlinkSync(filePath); } catch (e) {}
  res.json({ ok: true });
});

app.use('/uploads', express.static(UPLOAD_DIR));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
