import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const mdPath = path.join(root, 'day_of_ops_20260529.md');
const cssPath = path.join(root, 'day_of_ops_print.css');
const htmlPath = path.join(root, 'day_of_ops_20260529.html');
const pdfPath = path.join(root, 'day_of_ops_20260529.pdf');

const md = fs.readFileSync(mdPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const body = marked.parse(md);

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>当日運用メモ</title>
<style>${css}</style>
</head>
<body>${body}</body>
</html>`;

fs.writeFileSync(htmlPath, html, 'utf8');

const browsers = [
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
];

const browser = browsers.find((p) => fs.existsSync(p));
if (!browser) {
  console.error('Edge/Chrome が見つかりません。HTML をブラウザで開き「PDFに保存」してください:');
  console.error(htmlPath);
  process.exit(1);
}

const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
execSync(
  `"${browser}" --headless --disable-gpu --no-pdf-header-footer --print-to-pdf="${pdfPath}" "${fileUrl}"`,
  { stdio: 'inherit' }
);

console.log(`PDF: ${pdfPath}`);
