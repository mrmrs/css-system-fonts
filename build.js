const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { transform } = require('lightningcss');

// 1. Metadata extraction
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const modName = path.basename(pkg.style, '.css'); 
const srcFile = path.join(__dirname, 'src', `${modName}.css`);
const distDir = path.join(__dirname, 'dist');
const templateFile = path.join(__dirname, 'README.template.md');

if (!fs.existsSync(srcFile)) {
  console.error(`Source file not found: ${srcFile}`);
  process.exit(1);
}

const source = fs.readFileSync(srcFile, 'utf8');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// 2. CSS Transformation
const { code: unminified } = transform({
  filename: `${modName}.css`,
  code: Buffer.from(source),
  minify: false,
});
fs.writeFileSync(path.join(distDir, `${modName}.css`), unminified);

const { code: minified } = transform({
  filename: `${modName}.css`,
  code: Buffer.from(source),
  minify: true,
});
fs.writeFileSync(path.join(distDir, `${modName}.min.css`), minified);

// 3. Size Calculations (including Gzip)
const gzipSize = zlib.gzipSync(minified).length;

// 4. Class Table Parsing
const cssString = unminified.toString();
const classRows = [];
const ruleRegex = /\.([a-zA-Z0-9_-]+)\s*\{\s*([^}]+)\s*\}/g;
let match;
let firstClass = 'example';

while ((match = ruleRegex.exec(cssString)) !== null) {
  const className = match[1];
  const value = match[2].trim().replace(/\n/g, ' ');
  classRows.push(`| \`.${className}\` | \`${value}\` |`);
  if (firstClass === 'example') firstClass = className;
}

// 5. README Generation
if (fs.existsSync(templateFile)) {
  let template = fs.readFileSync(templateFile, 'utf8');
  const replacements = {
    '{{PKG_NAME}}': pkg.name,
    '{{PKG_DESC}}': pkg.description || 'Single purpose CSS classes.',
    '{{MOD}}': modName,
    '{{SIZE_RAW}}': unminified.length,
    '{{SIZE_MIN}}': minified.length,
    '{{SIZE_GZIP}}': gzipSize,
    '{{CLASS_TABLE}}': classRows.join('\n'),
    '{{EXAMPLE_CLASS}}': firstClass
  };

  Object.keys(replacements).forEach(key => {
    template = template.split(key).join(replacements[key]);
  });

  fs.writeFileSync('README.md', template);
  console.log(`✅ ${pkg.name} build complete.`);
}
