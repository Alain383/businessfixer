import { useState, useEffect } from 'react';
import { SEO } from '../components/SEO';
import { X } from 'lucide-react';

// Dynamically import all images from the images folder so adding a file to
// `src/assets/images` automatically surfaces it in the gallery.
const allImages = Object.values(
  import.meta.glob('/src/assets/images/*.{jpg,jpeg,png,webp}', { eager: true })
) as Array<{ default: string }>;

const galleryImageUrls = allImages.map((m) => m.default).sort();

// Remove duplicate URLs if any imports referenced the same file twice
const uniqueImages = Array.from(new Set(allImages.map((m) => m.default)));

// Helper to surface admin-managed uploads (base64 or external) stored in localStorage
function getAdminMediaUrls() {
  try {
    const raw = localStorage.getItem('admin_media');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((m: any) => m.url).filter(Boolean);
  } catch (e) {
    return [];
  }
}

function getExcludedUrls() {
  try {
    const raw = localStorage.getItem('admin_excluded_images');
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    return [];
  }
}

function getImageMetaMap() {
  try {
    const raw = localStorage.getItem('admin_image_meta');
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (typeof parsed !== 'object') return {};
    return parsed;
  } catch (e) {
    return {};
  }
}

// Note: gallery items are computed inside the component to include server-managed media.

export function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminUrls, setAdminUrls] = useState<string[]>(() => getAdminMediaUrls());
  const [excluded, setExcluded] = useState<string[]>(() => getExcludedUrls());
  const [metaMap, setMetaMap] = useState<Record<string, any>>(() => getImageMetaMap());

  // Refresh admin media from server if available
  useEffect(() => {
    (async () => {
      try {
        const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:4000';
        const res = await fetch(`${API_BASE}/api/media`);
        if (!res.ok) return;
        const data = await res.json();
        setAdminUrls(data.map((d: any) => d.url));

        // merge server metadata into local meta map where available
        const serverMeta: Record<string, any> = {};
        data.forEach((d: any) => { if (d.url && d.meta) serverMeta[d.url] = d.meta; });
        setMetaMap(prev => ({ ...prev, ...serverMeta }));
      } catch (e) {
        // ignore if server not running
      }
    })();
  }, []);

  // Update exclusions/meta if changed elsewhere (MediaLibrary writes to localStorage)
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'admin_excluded_images') setExcluded(getExcludedUrls());
      if (e.key === 'admin_image_meta') setMetaMap(getImageMetaMap());
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  // Generate 25 placeholder items for the 5x5 grid using available images (assets + admin uploads), excluding any admin-excluded entries
  const [mentoringPeople, setMentoringPeople] = useState<any[]>(() => {
    const combined = [...galleryImageUrls, ...getAdminMediaUrls()].filter(Boolean).filter(u => !getExcludedUrls().includes(u));
    return Array.from({ length: 25 }, (_, i) => ({
      id: i.toString(),
      name: `Mentee ${i + 1}`,
      role: 'Executive',
      image: combined.length ? combined[i % combined.length] : ''
    }));
  });

  useEffect(() => {
    const savedMentees = localStorage.getItem('admin_mentees');
    if (savedMentees) {
      try {
        const parsed = JSON.parse(savedMentees);
        if (parsed && parsed.length > 0) {
          setMentoringPeople(parsed);
        }
      } catch (e) {
        console.error('Failed to parse admin_mentees');
      }
    }
  }, []);

  const handleItemClick = (title: string) => {
    if (title === 'Executive Mentoring') {
      setIsModalOpen(true);
    }
  };

  // Compute primary gallery items from current asset + admin URLs
  const combined = [...uniqueImages, ...adminUrls].filter(Boolean).filter(u => !excluded.includes(u));
  const galleryItems = combined.length ? [{
    id: 1,
    title: metaMap[combined[0]]?.title || 'Executive Mentoring',
    url: combined[0],
    category: metaMap[combined[0]]?.category || 'Mentoring',
    span: 'md:col-span-3 md:row-span-2'
  }] : [];

  return (
    <div className="bg-brand-light min-h-screen">
      <SEO 
        title="Gallery | Harish Dabasia" 
        description="View professional moments from Harish Dabasia's speaking engagements, mentoring sessions, and media appearances."
      />
      
      {/* Hero Section */}
      <section className="bg-brand-dark text-white pt-32 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mb-6">
            Gallery
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            A collection of professional moments from speaking engagements, media appearances, and executive mentoring sessions.
          </p>
        </div>
      </section>

      {/* Professional Gallery Grid */}
      <section className="py-20 md:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-6">
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className={`group relative overflow-hidden rounded-[8px] bg-gray-100 shadow-lg cursor-pointer ${item.span || ''}`}
                onClick={() => handleItemClick(item.title)}
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl mb-4">
                    {item.title}
                  </h3>
                  {item.title === 'Executive Mentoring' && (
                    <div className="inline-flex items-center justify-center bg-[#FF6700] text-white font-bold py-2.5 px-6 rounded-[8px] self-start transition-transform shadow-lg group-hover:scale-105">
                      View All Alumni
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Mentoring Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/90 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-[8px] w-full max-w-7xl max-h-[90vh] overflow-y-auto shadow-2xl relative my-8">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 p-6 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy">Executive Mentoring Alumni</h2>
                <p className="text-gray-600 mt-1">A selection of leaders shaped by The No-Grind System™</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-[8px] flex items-center justify-center transition-colors text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              {/* 5 columns, 5 rows grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {mentoringPeople.map((person) => (
                  <div key={person.id} className="group relative aspect-square rounded-[8px] overflow-hidden bg-gray-100">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <span className="text-white font-bold text-sm truncate">{person.name}</span>
                      <span className="text-brand-gold text-xs font-medium truncate">{person.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
