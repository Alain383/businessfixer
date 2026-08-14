import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Save, X, Image as ImageIcon } from 'lucide-react';
import { resizeImage } from '../utils/imageUtils';

export interface Mentee {
  id: string;
  name: string;
  role: string;
  image: string;
}

export function MenteeGalleryManager() {
  const [mentees, setMentees] = useState<Mentee[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentMentee, setCurrentMentee] = useState<Partial<Mentee>>({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('admin_mentees');
    if (saved) {
      try {
        setMentees(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse mentees");
      }
    }
  }, []);

  const handleSave = () => {
    if (!currentMentee.name || !currentMentee.image) {
      alert("Name and Image are required.");
      return;
    }

    let updated: Mentee[];
    if (currentMentee.id) {
      updated = mentees.map(m => m.id === currentMentee.id ? currentMentee as Mentee : m);
    } else {
      updated = [{
        ...currentMentee,
        id: Date.now().toString()
      } as Mentee, ...mentees];
    }

    try {
      localStorage.setItem('admin_mentees', JSON.stringify(updated));
      setMentees(updated);
      setIsEditing(false);
      setCurrentMentee({});
    } catch (e) {
      alert("Storage quota exceeded. You might have uploaded too many images or images that are too large.");
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this mentee?")) {
      const updated = mentees.filter(m => m.id !== id);
      setMentees(updated);
      localStorage.setItem('admin_mentees', JSON.stringify(updated));
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const base64 = await resizeImage(file, 400, 400); // 400x400 max for thumbnails
      setCurrentMentee({ ...currentMentee, image: base64 });
    } catch (err) {
      alert("Failed to process image.");
    } finally {
      setIsUploading(false);
    }
  };

  if (isEditing) {
    return (
      <div className="bg-white border border-gray-200 shadow-sm p-5 md:p-8 rounded-[8px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display font-bold text-2xl text-brand-dark">
            {currentMentee.id ? 'Edit Mentee' : 'New Mentee'}
          </h2>
          <button 
            onClick={() => setIsEditing(false)}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
            <input 
              type="text" 
              value={currentMentee.name || ''}
              onChange={(e) => setCurrentMentee({...currentMentee, name: e.target.value})}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue rounded-[8px]"
              placeholder="Mentee Name"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Role / Title (Optional)</label>
            <input 
              type="text" 
              value={currentMentee.role || ''}
              onChange={(e) => setCurrentMentee({...currentMentee, role: e.target.value})}
              className="w-full bg-gray-50 border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue rounded-[8px]"
              placeholder="e.g. Executive, Founder"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Photo</label>
            <div className="flex items-center gap-4">
              {currentMentee.image ? (
                <div className="relative w-24 h-24 rounded-[8px] overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                  <img src={currentMentee.image} alt="Preview" className="w-full h-full object-cover" />
                  <button 
                    onClick={() => setCurrentMentee({ ...currentMentee, image: undefined })}
                    className="absolute top-1 right-1 bg-black/50 text-white p-1 rounded-[8px] hover:bg-black/80"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ) : (
                <div className="w-24 h-24 rounded-[8px] bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center shrink-0">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
              )}
              <label className="bg-white border border-gray-300 text-gray-700 font-bold py-2 px-4 rounded-[8px] hover:bg-gray-50 transition-colors cursor-pointer inline-block">
                {isUploading ? 'Processing...' : 'Upload Photo'}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden rounded-[8px]" 
                  onChange={handleImageUpload}
                  disabled={isUploading}
                />
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">Images are automatically resized and compressed to fit within storage limits.</p>
          </div>

          <div className="pt-4 flex gap-4">
            <button 
              onClick={handleSave}
              className="flex items-center justify-center gap-2 flex-1 bg-[#FF6700] text-white font-bold py-3 rounded-[8px] hover:bg-[#e65c00] transition-colors"
            >
              <Save className="w-5 h-5" /> Save Mentee
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
        <div>
          <h2 className="font-display font-bold text-xl text-brand-dark flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-brand-blue" />
            Mentee Gallery
          </h2>
          <p className="text-sm text-gray-500 mt-1">Manage the 5x5 grid items for the Executive Mentoring modal.</p>
        </div>
        <button 
          onClick={() => {
            setCurrentMentee({});
            setIsEditing(true);
          }}
          className="bg-[#FF6700] text-white px-4 py-2 rounded-[8px] font-bold hover:bg-[#e65c00] transition-colors flex items-center gap-2 text-sm shrink-0"
        >
          <Plus className="w-4 h-4" /> Add Mentee
        </button>
      </div>
      <div className="p-6">
        {mentees.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            No mentees added yet. Create one to populate the gallery grid!
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {mentees.map((mentee) => (
              <div key={mentee.id} className="group relative aspect-square rounded-[8px] overflow-hidden bg-gray-100 border border-gray-200">
                <img 
                  src={mentee.image} 
                  alt={mentee.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-2">
                  <span className="text-white font-bold text-sm truncate px-2">{mentee.name}</span>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        setCurrentMentee(mentee);
                        setIsEditing(true);
                      }}
                      className="p-1.5 bg-white text-gray-800 rounded-[8px] hover:bg-gray-200"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(mentee.id)}
                      className="p-1.5 bg-red-500 text-white rounded-[8px] hover:bg-red-600"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
