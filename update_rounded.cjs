const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // We want to add rounded-[10px] to anything that looks like a box, input, textarea, button, or card
  // Let's just do a regex replace on all classNames that don't already have rounded in them, but ARE buttons, inputs, textareas
  
  // A simple way is to find className="..." and see if the tag is button, input, or textarea.
  // Actually, we can just replace `<button[^>]+className="([^"]+)"` with added rounded-[10px] if it lacks it.
  
  const tags = ['button', 'input', 'textarea'];
  
  tags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]+?)className=(["'])(.*?)\\2`, 'g');
    content = content.replace(regex, (match, before, quote, classNames) => {
      if (!classNames.includes('rounded-')) {
        changed = true;
        return `<${tag}${before}className=${quote}${classNames} rounded-[10px]${quote}`;
      }
      return match;
    });
  });

  // What about cards? Usually they have 'border border-' or 'shadow-md' or 'bg-white p-'.
  // Let's add rounded-[10px] to any div or article that has 'border border-' or 'shadow' and 'bg-white' or 'bg-gray'
  const divRegex = /<div([^>]+?)className=(["'])(.*?)\2/g;
  content = content.replace(divRegex, (match, before, quote, classNames) => {
    if (!classNames.includes('rounded-') && 
       ((classNames.includes('border border-') && classNames.includes('p-')) ||
        (classNames.includes('shadow') && classNames.includes('bg-white') && classNames.includes('p-')))) {
      changed = true;
      return `<div${before}className=${quote}${classNames} rounded-[10px]${quote}`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${file}`);
  }
});
