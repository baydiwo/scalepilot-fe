const fs = require('fs');
const path = require('path');

const enPath = path.join(__dirname, 'messages', 'en.json');
const idPath = path.join(__dirname, 'messages', 'id.json');

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const id = JSON.parse(fs.readFileSync(idPath, 'utf8'));

en.FeaturesPage = {
  "title": "Features | ScalePilot",
  "description": "Explore the features of ScalePilot, the real-time verdict engine for Meta Ads.",
  "headline": "Everything you need to",
  "headlineSpan": "scale profitably.",
  "subheadline": "ScalePilot provides you with the complete suite that helps you make better decisions to optimize your ad spend and get better ROAS."
};

id.FeaturesPage = {
  "title": "Features | ScalePilot",
  "description": "Explore the features of ScalePilot, the real-time verdict engine for Meta Ads.",
  "headline": "Semua yang Anda butuhkan untuk",
  "headlineSpan": "scale dengan profit.",
  "subheadline": "ScalePilot memberikan Anda serangkaian fitur lengkap yang membantu Anda mengambil keputusan lebih baik untuk mengoptimalkan ad spend dan mendapatkan ROAS yang lebih tinggi."
};

en.SolutionsPage = {
  "title": "Solutions | ScalePilot",
  "description": "Real Solutions for Your Meta Ads Problems.",
  "headline": "Real Solutions for",
  "headlineSpan": "Your Meta Ads Problems.",
  "subheadline": "Stop the bleeding and scale your winning campaigns without breaking performance. We solve your pain points with leading analytic AI technology."
};

id.SolutionsPage = {
  "title": "Solutions | ScalePilot",
  "description": "Solusi Nyata untuk Masalah Meta Ads Anda.",
  "headline": "Solusi Nyata untuk",
  "headlineSpan": "Masalah Meta Ads Anda.",
  "subheadline": "Hentikan keboncosan dan scale kampanye pemenang Anda tanpa menghancurkan performa. Kami mengatasi pain points Anda dengan teknologi AI analitik terdepan."
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 2));
fs.writeFileSync(idPath, JSON.stringify(id, null, 2));

console.log('Dictionaries updated successfully.');
