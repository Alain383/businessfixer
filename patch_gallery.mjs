import fs from 'fs';

let content = fs.readFileSync('src/pages/Gallery.tsx', 'utf-8');

// Replace the hardcoded array with a state
content = content.replace(
  "const mentoringPeople = Array.from({ length: 25 }, (_, i) => ({\n    id: i,\n    name: `Mentee ${i + 1}`,\n    role: 'Executive',\n    image: [img1, img2, img3, realImg][i % 4]\n  }));",
  `import { useEffect } from 'react';\n\n  const [mentoringPeople, setMentoringPeople] = useState<any[]>(Array.from({ length: 25 }, (_, i) => ({\n    id: i.toString(),\n    name: \`Mentee \${i + 1}\`,\n    role: 'Executive',\n    image: [img1, img2, img3, realImg][i % 4]\n  })));\n\n  useEffect(() => {\n    const savedMentees = localStorage.getItem('admin_mentees');\n    if (savedMentees) {\n      try {\n        const parsed = JSON.parse(savedMentees);\n        if (parsed && parsed.length > 0) {\n          setMentoringPeople(parsed);\n        }\n      } catch (e) {\n        console.error('Failed to parse admin_mentees');\n      }\n    }\n  }, []);`
);

// We need to clean up any duplicate useEffect imports
if (content.includes("import { useEffect } from 'react';\n\n  const [mentoringPeople")) {
  content = content.replace("import { useState } from 'react';", "import { useState, useEffect } from 'react';");
  content = content.replace("import { useEffect } from 'react';\n\n  const [mentoringPeople", "const [mentoringPeople");
}

fs.writeFileSync('src/pages/Gallery.tsx', content);
console.log('Gallery patched');
