
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GUIDES } from '../src/constants/indicatorGuides.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://trandra-architect.pages.dev';
const PUBLIC_DIR = path.resolve(__dirname, '../public');

// --- HELPER: RFC 822 Date Format for Korea (+0900) ---
const getRFC822Date = (date = new Date()) => {
  const pieces = date.toUTCString().split(' ');
  // toUTCString returns "Tue, 10 Feb 2026 06:55:52 GMT"
  // We want to replace GMT with +0900 and adjust time if we wanted true local,
  // but RFC 822 "GMT" is also fine. Let's use a more robust format.
  // Actually, toUTCString is valid RFC 822. But let's be explicit.
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[date.getDay()];
  const day = String(date.getDate()).padStart(2, '0');
  const monthName = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${dayName}, ${day} ${monthName} ${year} ${hours}:${minutes}:${seconds} +0900`;
};

// --- SITEMAP GENERATION ---
const generateSitemap = () => {
  const currentDate = new Date().toISOString();

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${BASE_URL}/?tab=guide</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

  GUIDES.forEach(guide => {
    // Individual Guides (KR & EN)
    ['ko', 'en'].forEach(l => {
      xml += `
  <url>
    <loc>${BASE_URL}/?tab=guide&amp;id=${guide.id}&amp;lang=${l}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  });

  // Matchup Pages (KR & EN)
  for (let i = 0; i < GUIDES.length; i++) {
    for (let j = i + 1; j < GUIDES.length; j++) {
      const id = `${GUIDES[i].id}_vs_${GUIDES[j].id}`;
      ['ko', 'en'].forEach(l => {
        xml += `
  <url>
    <loc>${BASE_URL}/?tab=guide&amp;id=${id}&amp;lang=${l}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
      });
    }
  }

  xml += `
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), xml.trim());
  console.log('✅ sitemap.xml generated.');
};

// --- RSS GENERATION (Naver Compliant) ---
const generateRSS = () => {
  const currentDate = getRFC822Date();

  let xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:dc="http://purl.org/dc/elements/1.1/">
<channel>
  <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
  <title>Trandra Architect 지표 가이드</title>
  <link>${BASE_URL}</link>
  <description>전문 트레이딩뷰 지표 라이브러리 및 파인스크립트 생성기</description>
  <language>ko-KR</language>
  <pubDate>${currentDate}</pubDate>
  <lastBuildDate>${currentDate}</lastBuildDate>
  <dc:creator>Trandra Architect</dc:creator>`;

  // Normal Guides
  GUIDES.forEach(guide => {
    const title = guide.ko?.name || guide.id;
    const description = guide.ko?.description || '';
    const content = guide.ko?.content || '';
    const guid = `${BASE_URL}/?tab=guide&id=${guide.id}&lang=ko`;
    const pubDate = getRFC822Date();

    const escape = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

    xml += `
  <item>
    <title>${escape(title)}</title>
    <link>${guid.replace(/&/g, '&amp;')}</link>
    <description><![CDATA[${description}]]></description>
    <content:encoded><![CDATA[${content}]]></content:encoded>
    <pubDate>${pubDate}</pubDate>
    <guid isPermaLink="true">${guid.replace(/&/g, '&amp;')}</guid>
    <dc:creator>Trandra Architect</dc:creator>
    <category>${guide.category || 'Trading'}</category>
  </item>`;
  });

  // Matchups (Recent ones to keep RSS manageable, or just primary pairs)
  // To avoid RSS becoming too large, we'll only add the first 50 matchups to RSS, 
  // but the Sitemap will have all 2,000+.
  let matchupCount = 0;
  for (let i = 0; i < GUIDES.length && matchupCount < 50; i++) {
    for (let j = i + 1; j < GUIDES.length && matchupCount < 50; j++) {
      const g1 = GUIDES[i];
      const g2 = GUIDES[j];
      const id = `${g1.id}_vs_${g2.id}`;
      const title = `${g1.ko.name} vs ${g2.ko.name}: 핵심 비교 분석`;
      const description = `${g1.ko.name}와 ${g2.ko.name}의 차이점과 최적의 조합 전략입니다.`;
      const guid = `${BASE_URL}/?tab=guide&id=${id}&lang=ko`;

      xml += `
  <item>
    <title>${title}</title>
    <link>${guid.replace(/&/g, '&amp;')}</link>
    <description><![CDATA[${description}]]></description>
    <pubDate>${currentDate}</pubDate>
    <guid isPermaLink="true">${guid.replace(/&/g, '&amp;')}</guid>
    <dc:creator>Trandra Architect</dc:creator>
    <category>Comparison</category>
  </item>`;
      matchupCount++;
    }
  }

  xml += `
</channel>
</rss>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), xml.trim());
  console.log('✅ rss.xml generated (Naver Compliant).');
};

// Run
try {
  generateSitemap();
  generateRSS();
} catch (error) {
  console.error('Error generating SEO files:', error);
  process.exit(1);
}
