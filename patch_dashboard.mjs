import fs from 'fs';

let content = fs.readFileSync('src/pages/Dashboard.tsx', 'utf-8');

if (!content.includes('MenteeGalleryManager')) {
  // Insert import
  content = content.replace("import { SEO } from '../components/SEO';", "import { SEO } from '../components/SEO';\nimport { MenteeGalleryManager } from '../components/MenteeGalleryManager';");
  
  // Insert tab button
  const tabButtonHTML = `          <button 
            onClick={() => setActiveTab('mentees')}
            className={\`w-full text-left p-4 font-semibold flex items-center gap-3 transition-colors \${activeTab === 'mentees' ? 'bg-gray-100 text-brand-blue border-l-4 border-brand-blue' : 'bg-white text-gray-600 hover:bg-gray-50 border-l-4 border-transparent border border-t-0 border-x-gray-200 border-b-gray-200'}\`}
          >
            <Users className="w-5 h-5" /> Mentee Gallery
          </button>`;
  
  content = content.replace("          <button \n            onClick={() => setActiveTab('content')}", tabButtonHTML + "\n          <button \n            onClick={() => setActiveTab('content')}");
  
  // Insert tab content
  const tabContentHTML = `          {/* Mentee Gallery Tab */}
          {activeTab === 'mentees' && (
            <MenteeGalleryManager />
          )}`;
  
  content = content.replace("{/* Content CRUD Tab */}", tabContentHTML + "\n\n          {/* Content CRUD Tab */}");
  
  fs.writeFileSync('src/pages/Dashboard.tsx', content);
  console.log('Dashboard patched');
} else {
  console.log('Dashboard already patched');
}
