const fs = require('fs');
const files = fs.readdirSync('.').filter(f => /^Module (0[1-9]|10)/.test(f) && f.endsWith('.md'));
for (const f of files) {
  const source = fs.readFileSync(f, 'utf8');
  const clean = source.replace(/^(\s*[-*+]\s*)✅\s*/gm, '$1');
  if (clean !== source) {
    fs.writeFileSync(f, clean, 'utf8');
    console.log('Removed checklist tick emoji:', f);
  }
}
const module1 = files.find(f => /^Module 01/.test(f));
if (!module1) throw new Error('Module 1 Markdown not found');
let source = fs.readFileSync(module1, 'utf8');
if (!source.includes('smallest-useful-product-module1.png')) {
  const section = /(## 4\. Describe the smallest useful product\r?\n)/;
  if (!section.test(source)) throw new Error('Module 1 section heading not found');
  source = source.replace(section, '$1\r\n![A visual guide to defining the smallest useful product](Images/smallest-useful-product-module1.png)\r\n');
  fs.writeFileSync(module1, source, 'utf8');
  console.log('Added Module 1 image.');
}
