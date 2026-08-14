import fs from 'fs';

let content = fs.readFileSync('src/pages/Dashboard.tsx', 'utf-8');

// 1. Import resizeImage
if (!content.includes('import { resizeImage }')) {
  content = content.replace(
    "import { MenteeGalleryManager } from '../components/MenteeGalleryManager';",
    "import { MenteeGalleryManager } from '../components/MenteeGalleryManager';\nimport { resizeImage } from '../utils/imageUtils';"
  );
}

// 2. Add image to BlogPost interface
content = content.replace(
  "  date: string;\n}",
  "  date: string;\n  image?: string;\n}"
);

// 3. Add isUploading state to BlogManager
content = content.replace(
  "  const [currentBlog, setCurrentBlog] = useState<Partial<BlogPost>>({});",
  "  const [currentBlog, setCurrentBlog] = useState<Partial<BlogPost>>({});\n  const [isUploading, setIsUploading] = useState(false);"
);

// 4. Add handleImageUpload to BlogManager
const imageUploadFn = `
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const base64 = await resizeImage(file, 800, 600); // 800x600 max for blog featured image
      setCurrentBlog({ ...currentBlog, image: base64 });
    } catch (err) {
      alert("Failed to process image.");
    } finally {
      setIsUploading(false);
    }
  };
`;

content = content.replace(
  "  useEffect(() => {",
  imageUploadFn + "\n  useEffect(() => {"
);

// 5. Add UI block for image upload
const imageUploadUI = `
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Featured Image</label>
            <div className="flex items-center gap-4">
              {currentBlog.image ? (
                <div className="relative w-32 h-24 rounded-md overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img src={currentBlog.image} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setCurrentBlog({ ...currentBlog, image: undefined })}
                    className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-24 rounded-md bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <label className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-50 transition-colors cursor-pointer inline-block">
                {isUploading ? 'Processing...' : 'Upload Featured Image'}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>
`;

content = content.replace(
  "          <div>\n            <label className=\"block text-sm font-bold text-gray-700 mb-1\">Body Content</label>",
  imageUploadUI + "\n          <div>\n            <label className=\"block text-sm font-bold text-gray-700 mb-1\">Body Content</label>"
);

fs.writeFileSync('src/pages/Dashboard.tsx', content);
console.log('Blog patched');
