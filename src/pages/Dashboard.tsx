import React, { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, X, LayoutDashboard, Lock, BarChart3, Users, Settings, Mail, Map, FileText, Plus, Edit2, Trash2, Save } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MenteeGalleryManager } from '../components/MenteeGalleryManager';
import { resizeImage } from '../utils/imageUtils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const pageViewsData = [
  { name: 'Mon', views: 4000 },
  { name: 'Tue', views: 3000 },
  { name: 'Wed', views: 2000 },
  { name: 'Thu', views: 2780 },
  { name: 'Fri', views: 1890 },
  { name: 'Sat', views: 2390 },
  { name: 'Sun', views: 3490 },
];

const topographyData = [
  { name: 'Rwanda', value: 400 },
  { name: 'UK', value: 300 },
  { name: 'Kenya', value: 300 },
  { name: 'South Africa', value: 200 },
  { name: 'USA', value: 150 },
];

const COLORS = ['#003366', '#d4af37', '#25D366', '#4B5563', '#9CA3AF'];

interface BlogPost {
  id: string;
  heading: string;
  subheading: string;
  quote: string;
  body: string;
  date: string;
  image?: string;
}

function BlogManager() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<Partial<BlogPost>>({});
  const [isUploading, setIsUploading] = useState(false);


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

  useEffect(() => {
    const saved = localStorage.getItem('admin_blogs');
    if (saved) {
      try {
        setBlogs(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse blogs");
      }
    }
  }, []);

  const handleSave = () => {
    if (!currentBlog.heading || !currentBlog.body) {
      alert("Heading and Body are required.");
      return;
    }

    let updated: BlogPost[];
    if (currentBlog.id) {
      updated = blogs.map(b => b.id === currentBlog.id ? currentBlog as BlogPost : b);
    } else {
      updated = [{
        ...currentBlog,
        id: Date.now().toString(),
        date: new Date().toLocaleDateString()
      } as BlogPost, ...blogs];
    }

    setBlogs(updated);
    localStorage.setItem('admin_blogs', JSON.stringify(updated));
    setIsEditing(false);
    setCurrentBlog({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updated = blogs.filter(b => b.id !== id);
      setBlogs(updated);
      localStorage.setItem('admin_blogs', JSON.stringify(updated));
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white border border-gray-200 shadow-sm p-5 md:p-8 rounded-[8px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display font-bold text-2xl text-brand-dark">
            {currentBlog.id ? 'Edit Post' : 'New Post'}
          </h2>
          <button 
            onClick={() => setIsEditing(false)}
            className="text-gray-500 hover:text-brand-red transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Heading</label>
            <input 
              type="text" 
              value={currentBlog.heading || ''}
              onChange={(e) => setCurrentBlog({...currentBlog, heading: e.target.value})}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 rounded-[8px]"
              placeholder="Post Title"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Subheading</label>
            <input 
              type="text" 
              value={currentBlog.subheading || ''}
              onChange={(e) => setCurrentBlog({...currentBlog, subheading: e.target.value})}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 rounded-[8px]"
              placeholder="A brief summary or subtitle"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Quote (Optional)</label>
            <textarea 
              value={currentBlog.quote || ''}
              onChange={(e) => setCurrentBlog({...currentBlog, quote: e.target.value})}
              rows={2}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 rounded-[8px] resize-none"
              placeholder="Highlight quote to display"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Featured Image</label>
            <div className="flex items-center gap-4">
              {currentBlog.image ? (
                <div className="relative w-32 h-24 rounded-[8px] overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img src={currentBlog.image} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setCurrentBlog({ ...currentBlog, image: undefined })}
                    className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-[8px] hover:bg-black/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="w-32 h-24 rounded-[8px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <label className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-[8px] hover:bg-gray-50 transition-colors cursor-pointer inline-block">
                {isUploading ? 'Processing...' : 'Upload Featured Image'}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden rounded-[8px]" 
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Body Content</label>
            <textarea 
              value={currentBlog.body || ''}
              onChange={(e) => setCurrentBlog({...currentBlog, body: e.target.value})}
              rows={8}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue focus:ring-1 rounded-[8px]"
              placeholder="Write your blog post content here..."
            />
          </div>
          <div className="pt-4 flex gap-4">
            <button 
              onClick={handleSave}
              className="flex items-center justify-center gap-2 flex-1 bg-[#FF6700] text-white font-bold py-3 rounded-[8px] hover:bg-[#e65c00] transition-colors"
            >
              <Save className="w-5 h-5" /> Save Post
            </button>
            <button 
              onClick={() => setIsEditing(false)}
              className="flex-1 bg-white border border-gray-300 text-gray-700 font-bold py-3 rounded-[8px] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-[8px] overflow-hidden">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gray-50">
        <h2 className="font-display font-bold text-xl text-brand-dark flex items-center gap-2">
          <FileText className="w-5 h-5 text-brand-blue" />
          Blogs & News
        </h2>
        <button 
          onClick={() => {
            setCurrentBlog({});
            setIsEditing(true);
          }}
          className="bg-[#FF6700] text-white px-4 py-2 rounded-[8px] font-bold hover:bg-[#e65c00] transition-colors flex items-center gap-2 text-sm shrink-0"
        >
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>
      <div className="divide-y divide-gray-200">
        {blogs.length === 0 ? (
          <div className="p-6 md:p-12 text-center text-gray-500">
            No posts found. Create your first blog post!
          </div>
        ) : (
          blogs.map((blog) => (
            <div key={blog.id} className="p-4 sm:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-gray-50 transition-colors">
              <div className="flex gap-4 flex-1 min-w-0 w-full items-start">
                {blog.image && (
                  <img src={blog.image} alt={blog.heading} className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-[8px] border border-gray-200 shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{blog.heading}</h3>
                  <p className="text-gray-500 text-sm mb-2 line-clamp-2">{blog.subheading}</p>
                  <p className="text-xs text-gray-400 font-medium">Published: {blog.date}</p>
                </div>
              </div>
              <div className="flex gap-2 shrink-0 mt-4 md:mt-0">
                <button 
                  onClick={() => {
                    setCurrentBlog(blog);
                    setIsEditing(true);
                  }}
                  className="p-2 text-gray-500 hover:text-brand-blue bg-white border border-gray-200 rounded-[8px] transition-colors"
                  title="Edit Post"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(blog.id)}
                  className="p-2 text-gray-500 hover:text-brand-red bg-white border border-gray-200 rounded-[8px] transition-colors"
                  title="Delete Post"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export function Dashboard() {
  const [activeTab, setActiveTab] = useState('analytics');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [targetPage, setTargetPage] = useState<string>('home_hero');
  const [isDragging, setIsDragging] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
    if (token) {
      // optimistic
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        const message = await res.text();
        throw new Error(message || 'Invalid credentials');
      }

      const data = await res.json();
      sessionStorage.setItem('adminToken', data.token);
      setIsLoggedIn(true);
      setError('');
    } catch (e) {
      const message = e instanceof Error && e.message ? e.message : 'Invalid username or password';
      setError(message.includes('Failed to fetch')
        ? 'The admin server is not running. Start it with "npm run start:server" and try again.'
        : 'Invalid username or password. Use the admin login details provided below.');
    }
  };

  const handleSaveImage = async () => {
    try {
      if (!selectedFile) {
        alert('No file selected.');
        return;
      }

      const form = new FormData();
      form.append('file', selectedFile);
      form.append('meta', JSON.stringify({ category: targetPage }));

      const token = sessionStorage.getItem('adminToken');
      const res = await fetch(`${API_BASE}/api/media`, {
        method: 'POST',
        body: form,
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      });
      if (!res.ok) throw new Error('Upload failed');
      const data = await res.json();

      // Assign the uploaded media to the target section key so pages can use it
      localStorage.setItem(`image_${targetPage}`, data.url);
      alert('Image uploaded and assigned successfully.');
      setSelectedFile(null);
      setPreviewUrl(null);
    } catch (e) {
      alert('Upload failed. Make sure the server is running and you are authenticated.');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedImage(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSelectedImage(null);
    }
  };

  const leadPool = [
    { name: 'John Kamau', email: 'john.k@example.com', service: 'Business Mentoring' },
    { name: 'Sarah Osei', email: 'sarah.osei@example.com', service: 'Bootcamp Inquiry' },
    { name: 'David Smith', email: 'dsmith88@example.com', service: 'Property Investment' },
    { name: 'Amina Diallo', email: 'amina.d@example.com', service: 'General Question' },
  ];

  const [liveCounts, setLiveCounts] = useState({ blogs: 0, media: 0, leads: leadPool.length });

  useEffect(() => {
    try {
      const savedBlogs = JSON.parse(localStorage.getItem('admin_blogs') || '[]');
      const savedMedia = JSON.parse(localStorage.getItem('admin_media') || '[]');
      const leads = leadPool.length;
      setLiveCounts({
        blogs: Array.isArray(savedBlogs) ? savedBlogs.length : 0,
        media: Array.isArray(savedMedia) ? savedMedia.length : 0,
        leads,
      });
    } catch {
      setLiveCounts({ blogs: 0, media: 0, leads: leadPool.length });
    }
  }, []);

  const dashboardStats = [
    { label: 'Total Visitors', value: '24,592', delta: '+12.5%', tone: 'emerald' },
    { label: 'Active Bootcamps', value: '3', delta: '85% filled', tone: 'blue' },
    { label: 'New Leads', value: String(liveCounts.leads), delta: '+8% this week', tone: 'orange' },
  ];

  const navItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'images', label: 'Image Manager', icon: ImageIcon },
    { id: 'mentees', label: 'Mentee Gallery', icon: Users },
    { id: 'content', label: 'Content CRUD', icon: FileText },
    { id: 'messages', label: 'Leads & Messages', icon: Mail },
  ];

  const overviewMetrics = [
    { title: 'Media', value: `${Math.max(liveCounts.media, 24)}+` },
    { title: 'Blogs', value: String(liveCounts.blogs || 3) },
    { title: 'Leads', value: String(liveCounts.leads) },
  ];

  const quickActions = [
    { label: liveCounts.blogs > 0 ? `Publish new insight` : 'Create first insight', action: 'content' },
    { label: liveCounts.media > 0 ? 'Upload homepage media' : 'Add media asset', action: 'images' },
    { label: `Review ${liveCounts.leads} leads`, action: 'messages' },
    { label: 'Update gallery', action: 'mentees' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#fff8f0_0%,_#f8fafc_45%,_#eef2f7_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <SEO title="Admin Login | Harish Dabasia" description="Admin access only." />
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center rounded-[28px] border border-orange-100 bg-white/80 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white shadow-lg shadow-black/20">
                <LayoutDashboard className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">Executive Access</p>
                <h1 className="font-display text-3xl font-bold text-brand-dark">Admin Dashboard</h1>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                Secure portal
              </div>

              <h2 className="max-w-lg font-display text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
                Manage your brand presence with clarity.
              </h2>

              <p className="max-w-xl text-base leading-7 text-gray-600">
                Update programs, media, and business growth touchpoints from one elegant control center.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { title: 'Media', value: '24+' },
                { title: 'Visitors', value: '24.5k' },
                { title: 'Leads', value: '142' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-500">{item.title}</p>
                  <p className="mt-2 font-display text-2xl font-bold text-brand-dark">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_30px_90px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white shadow-xl shadow-black/20">
                <Lock className="h-7 w-7" />
              </div>
            </div>

            <h1 className="mb-2 text-center font-display text-3xl font-bold text-brand-dark">Admin Login</h1>
            <p className="mb-6 text-center text-sm text-gray-500">Use your secure dashboard credentials</p>

            {error && (
              <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <div className="mb-5 rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3 text-xs text-gray-700">
              <div><span className="font-bold text-brand-dark">Default admin:</span> Alain</div>
              <div><span className="font-bold text-brand-dark">Password:</span> Mahant0506@</div>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition focus:border-black focus:outline-none focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 transition focus:border-black focus:outline-none focus:ring-2 focus:ring-orange-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-2xl bg-black px-4 py-3 text-sm font-bold text-white transition hover:bg-gray-800"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      <SEO title="Admin Dashboard | Harish Dabasia" description="Upload images and manage content." />

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black text-white shadow-lg shadow-black/10">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Control Center</p>
              <h1 className="font-display text-2xl font-bold text-slate-900">Admin Dashboard</h1>
            </div>
          </div>

          <button
            onClick={() => {
              sessionStorage.removeItem('adminToken');
              setIsLoggedIn(false);
            }}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-red-200 hover:text-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-5 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
        <aside className="space-y-5">
          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Overview</p>
                <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Harish</h2>
              </div>
              <div className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">Online</div>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-2">
              {overviewMetrics.map((metric) => (
                <div key={metric.title} className="rounded-2xl bg-slate-50 p-2 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">{metric.title}</div>
                  <div className="mt-1 font-display text-lg font-bold text-slate-900">{metric.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                    activeTab === id
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Quick actions</p>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => setActiveTab(action.action)}
                  className="flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  <span>{action.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </button>
              ))}
            </div>
          </div>
        </aside>

        <main className="space-y-6">
          {activeTab === 'analytics' && (
            <>
              <div className="grid gap-4 sm:grid-cols-3">
                {dashboardStats.map((stat) => (
                  <div key={stat.label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                      <span className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] ${
                        stat.tone === 'emerald'
                          ? 'bg-emerald-100 text-emerald-700'
                          : stat.tone === 'blue'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-orange-100 text-orange-700'
                      }`}>
                        {stat.delta}
                      </span>
                    </div>
                    <p className="mt-4 font-display text-4xl font-bold text-slate-900">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 xl:grid-cols-2">
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-slate-900">Website traffic</h3>
                    <div className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">7 days</div>
                  </div>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={pageViewsData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                        <XAxis dataKey="name" stroke="#64748b" tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" tickLine={false} axisLine={false} width={42} />
                        <Tooltip />
                        <Line type="monotone" dataKey="views" stroke="#000000" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-display text-2xl font-bold text-slate-900">Visitor topography</h3>
                    <div className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">Regions</div>
                  </div>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={topographyData} cx="50%" cy="50%" innerRadius={58} outerRadius={90} paddingAngle={4} dataKey="value">
                          {topographyData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 flex flex-wrap justify-center gap-3">
                    {topographyData.map((entry, index) => (
                      <div key={entry.name} className="flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                        {entry.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'images' && (
            <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Media Studio</p>
                  <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">Upload image asset</h2>
                </div>
                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Brand assets</div>
              </div>

              <div className="mb-8 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <label className="mb-3 block text-sm font-bold text-slate-700">Image target section</label>
                <select
                  value={targetPage}
                  onChange={(e) => setTargetPage(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-200"
                >
                  <option value="home_hero">Home Page: Main Hero Image</option>
                  <option value="home_mentor">Home Page: Mentor Profile Photo</option>
                  <option value="home_cta">Home Page: CTA Background</option>
                  <option value="about_hero">About Page: Main Hero Image</option>
                  <option value="podcast_hero">Podcast Page: Hero Background</option>
                  <option value="podcast_thumbnail">Podcast Page: Episode Thumbnail</option>
                  <option value="system_hero">System Page: Hero Background</option>
                  <option value="book_hero">Book Page: Hero Background</option>
                  <option value="bootcamp_hero">Bootcamp Page: Hero Background</option>
                  <option value="generic_hero">Services/Media Page: Hero Background</option>
                </select>
              </div>

              {!previewUrl && !selectedImage ? (
                <div
                  className={`rounded-[24px] border-2 border-dashed p-8 text-center transition ${isDragging ? 'border-slate-900 bg-slate-100' : 'border-slate-300 bg-slate-50 hover:border-slate-900 hover:bg-slate-100'}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className={`mx-auto mb-4 h-12 w-12 ${isDragging ? 'text-slate-900' : 'text-slate-400'}`} />
                  <h3 className="text-xl font-bold text-slate-800">Drag and drop an image</h3>
                  <p className="mt-2 text-sm text-slate-500">or click to browse from your computer</p>

                  <label className="mt-6 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800">
                    Browse Files
                    <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                  </label>
                </div>
              ) : (
                <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-800">Preview</h3>
                    <button
                      onClick={() => { setSelectedFile(null); setPreviewUrl(null); setSelectedImage(null); }}
                      className="flex items-center gap-1 text-sm font-semibold text-slate-500 transition hover:text-red-600"
                    >
                      <X className="h-4 w-4" /> Remove
                    </button>
                  </div>

                  <div className="mb-6 overflow-hidden rounded-2xl bg-black">
                    <img src={previewUrl || selectedImage || ''} alt="Preview" className="aspect-video w-full object-contain" />
                  </div>

                  <div className="flex gap-3">
                    <button onClick={handleSaveImage} className="flex-1 rounded-2xl bg-[#FF6700] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#e65c00]">
                      Save to Media Library
                    </button>
                    <button onClick={() => setSelectedImage(null)} className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <h3 className="mb-4 font-display text-2xl font-bold text-slate-900">Media library</h3>
                <MediaLibrary />
              </div>
            </div>
          )}

          {activeTab === 'mentees' && <MenteeGalleryManager />}
          {activeTab === 'content' && <BlogManager />}

          {activeTab === 'messages' && (
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Inbox</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Recent leads</h2>
                </div>
                <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-bold uppercase tracking-[0.12em] text-orange-700">3 New</span>
              </div>

              <div className="divide-y divide-slate-200">
                {[
                  { name: 'John Kamau', email: 'john.k@example.com', service: 'Business Mentoring', date: 'Today, 10:45 AM', isNew: true },
                  { name: 'Sarah Osei', email: 'sarah.osei@example.com', service: 'Bootcamp Inquiry', date: 'Yesterday, 3:20 PM', isNew: true },
                  { name: 'David Smith', email: 'dsmith88@example.com', service: 'Property Investment', date: 'Aug 5, 2026', isNew: true },
                  { name: 'Amina Diallo', email: 'amina.d@example.com', service: 'General Question', date: 'Aug 3, 2026', isNew: false },
                ].map((lead, i) => (
                  <div key={i} className={`flex flex-col gap-4 p-5 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between ${lead.isNew ? 'bg-orange-50/30' : ''}`}>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate text-lg font-bold text-slate-900">{lead.name}</h3>
                        {lead.isNew && <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{lead.email}</p>
                    </div>

                    <div className="flex flex-col gap-2 md:items-end">
                      <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600">{lead.service}</span>
                      <span className="text-xs text-slate-400">{lead.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Small media management component used by the Dashboard image manager.
function MediaLibrary() {
  const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';

  // Load asset images (bundled) and admin uploads
  const assetModules = Object.values(
    import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp}', { eager: true })
  ) as Array<{ default: string }>;
  const assetUrls = assetModules.map((m) => m.default).sort();

  const [adminMedia, setAdminMedia] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftMeta, setDraftMeta] = useState<Record<string, { title: string; alt: string; category: string }>>({});

  const [excluded, setExcluded] = useState<string[]>(() => {
    try { const raw = localStorage.getItem('admin_excluded_images'); return raw ? JSON.parse(raw) : []; } catch { return []; }
  });

  const [metaMap, setMetaMap] = useState<Record<string, any>>(() => {
    try { const raw = localStorage.getItem('admin_image_meta'); return raw ? JSON.parse(raw) : {}; } catch { return {}; }
  });

  useEffect(() => {
    // Fetch uploaded media from server
    (async () => {
      try {
        const token = sessionStorage.getItem('adminToken');
        const res = await fetch(`${API_BASE}/api/media`, { headers: token ? { Authorization: `Bearer ${token}` } : undefined });
        if (!res.ok) return;
        const data = await res.json();
        setAdminMedia(data.map((d: any) => ({ ...d, url: d.url })));
      } catch (e) {
        // ignore
      }
    })();
  }, [API_BASE]);

  useEffect(() => {
    localStorage.setItem('admin_excluded_images', JSON.stringify(excluded));
  }, [excluded]);

  useEffect(() => {
    localStorage.setItem('admin_image_meta', JSON.stringify(metaMap));
  }, [metaMap]);

  const combined = [...assetUrls, ...adminMedia.map(m => m.url)].filter(Boolean);

  const toggleExclude = (url: string) => {
    setExcluded(prev => prev.includes(url) ? prev.filter(u => u !== url) : [url, ...prev]);
  };

  const removeAdminMedia = async (id: string) => {
    if (!window.confirm('Delete this uploaded image from the media library? This cannot be undone.')) return;
    try {
      const token = sessionStorage.getItem('adminToken');
      const res = await fetch(`${API_BASE}/api/media/${id}`, { method: 'DELETE', headers: token ? { Authorization: `Bearer ${token}` } : undefined });
      if (!res.ok) throw new Error('Delete failed');
      setAdminMedia(prev => prev.filter(m => m.id !== id));
      if (editingId === id) setEditingId(null);
    } catch (e) {
      alert('Failed to delete media.');
    }
  };

  const startEdit = (entry: any) => {
    const meta = entry?.meta || {};
    setEditingId(entry.id);
    setDraftMeta(prev => ({
      ...prev,
      [entry.id]: {
        title: meta.title || '',
        alt: meta.alt || '',
        category: meta.category || '',
      }
    }));
  };

  const updateDraft = (id: string, field: 'title' | 'alt' | 'category', value: string) => {
    setDraftMeta(prev => ({
      ...prev,
      [id]: {
        title: prev[id]?.title ?? '',
        alt: prev[id]?.alt ?? '',
        category: prev[id]?.category ?? '',
        [field]: value,
      }
    }));
  };

  const saveMeta = async (url: string, key: string, value: string) => {
    const adminEntry = adminMedia.find(m => m.url === url);
    if (adminEntry) {
      try {
        const token = sessionStorage.getItem('adminToken');
        const body = { meta: { ...(adminEntry.meta || {}), [key]: value } };
        const res = await fetch(`${API_BASE}/api/media/${adminEntry.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error('Failed');
        const updated = await res.json();
        setAdminMedia(prev => prev.map(m => m.id === updated.id ? { ...m, meta: updated.meta } : m));
      } catch (e) {
        alert('Failed to save metadata to server');
      }
      return;
    }

    setMetaMap(prev => ({ ...prev, [url]: { ...(prev[url] || {}), [key]: value } }));
  };

  const saveEditedMeta = async (entry: any) => {
    if (!entry) return;

    const draft = draftMeta[entry.id] || { title: '', alt: '', category: '' };
    const nextMeta = {
      title: draft.title.trim(),
      alt: draft.alt.trim(),
      category: draft.category.trim(),
    };

    try {
      const token = sessionStorage.getItem('adminToken');
      const res = await fetch(`${API_BASE}/api/media/${entry.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify({ meta: nextMeta }),
      });

      if (!res.ok) throw new Error('Failed');
      const updated = await res.json();
      setAdminMedia(prev => prev.map(m => m.id === updated.id ? { ...m, meta: updated.meta } : m));
      setEditingId(null);
      setDraftMeta(prev => {
        const next = { ...prev };
        delete next[entry.id];
        return next;
      });
    } catch (e) {
      alert('Failed to update this media item.');
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {combined.map((url, i) => {
          const isAsset = assetUrls.includes(url);
          const adminEntry = adminMedia.find(m => m.url === url);
          const filename = adminEntry?.filename || url.split('/').pop();
          const meta = adminEntry?.meta || metaMap[url] || {};
          const isEditingCard = adminEntry ? editingId === adminEntry.id : false;
          const draft = adminEntry ? (draftMeta[adminEntry.id] || { title: meta.title || '', alt: meta.alt || '', category: meta.category || '' }) : undefined;

          return (
            <div key={url} className="bg-white border border-gray-200 rounded-[8px] overflow-hidden p-2 text-center">
              <div className="aspect-square bg-gray-100 mb-2 overflow-hidden rounded-[6px]"><img src={url} alt={meta.title || filename} className="w-full h-full object-cover" /></div>
              <div className="text-xs text-gray-600 mb-2 truncate">{filename}</div>

              <div className="mb-2 flex gap-2 justify-center">
                <button onClick={() => toggleExclude(url)} className={`text-xs px-2 py-1 rounded-[6px] border ${excluded.includes(url) ? 'bg-gray-100 border-gray-300' : 'bg-white border-gray-200'}`}>
                  {excluded.includes(url) ? 'Included' : 'Exclude'}
                </button>
                {!isAsset && adminEntry && (
                  <>
                    <button onClick={() => (isEditingCard ? setEditingId(null) : startEdit(adminEntry))} className="text-xs px-2 py-1 rounded-[6px] border border-slate-300 bg-slate-50 text-slate-700">
                      {isEditingCard ? 'Close' : 'Edit'}
                    </button>
                    <button onClick={() => removeAdminMedia(adminEntry.id)} className="text-xs px-2 py-1 rounded-[6px] border border-red-200 text-red-600">Delete</button>
                  </>
                )}
              </div>

              {isEditingCard && adminEntry ? (
                <div className="space-y-2 text-left text-xs">
                  <input
                    placeholder="Title"
                    value={draft.title || ''}
                    onChange={(e) => updateDraft(adminEntry.id, 'title', e.target.value)}
                    className="w-full px-2 py-1 border rounded-[6px] text-sm"
                  />
                  <input
                    placeholder="Alt text"
                    value={draft.alt || ''}
                    onChange={(e) => updateDraft(adminEntry.id, 'alt', e.target.value)}
                    className="w-full px-2 py-1 border rounded-[6px] text-sm"
                  />
                  <input
                    placeholder="Category"
                    value={draft.category || ''}
                    onChange={(e) => updateDraft(adminEntry.id, 'category', e.target.value)}
                    className="w-full px-2 py-1 border rounded-[6px] text-sm"
                  />
                  <div className="flex gap-2">
                    <button onClick={() => saveEditedMeta(adminEntry)} className="flex-1 rounded-[6px] bg-slate-900 px-2 py-1.5 text-[11px] font-semibold text-white">Update</button>
                    <button onClick={() => setEditingId(null)} className="flex-1 rounded-[6px] border border-slate-200 bg-white px-2 py-1.5 text-[11px] font-semibold text-slate-600">Cancel</button>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-left text-xs">
                  <div className="w-full px-2 py-1 rounded-[6px] border border-slate-100 bg-slate-50 text-slate-700">Title: {meta.title || '—'}</div>
                  <div className="w-full px-2 py-1 rounded-[6px] border border-slate-100 bg-slate-50 text-slate-700">Alt: {meta.alt || '—'}</div>
                  <div className="w-full px-2 py-1 rounded-[6px] border border-slate-100 bg-slate-50 text-slate-700">Category: {meta.category || '—'}</div>
                </div>
              )}

              {!adminEntry && (
                <div className="mt-3 space-y-2 text-left text-xs">
                  <input placeholder="Title" value={meta.title || ''} onChange={(e) => saveMeta(url, 'title', e.target.value)} className="w-full px-2 py-1 border rounded-[6px] text-sm" />
                  <input placeholder="Alt text" value={meta.alt || ''} onChange={(e) => saveMeta(url, 'alt', e.target.value)} className="w-full px-2 py-1 border rounded-[6px] text-sm" />
                  <input placeholder="Category" value={meta.category || ''} onChange={(e) => saveMeta(url, 'category', e.target.value)} className="w-full px-2 py-1 border rounded-[6px] text-sm" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
