import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replacements
  content = content.replace(/Maison Ciel/g, "L'Allure");
  content = content.replace(/MAISON \/ CIEL/g, "L'ALLURE");
  content = content.replace(/ciel\./g, "L'Allure.");
  content = content.replace(/Aurélien Ciel/g, "Aurélien L'Allure");
  content = content.replace(/maisonciel\.com/g, "lallure.com");
  content = content.replace(/Ciel is /g, "L'Allure is ");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
