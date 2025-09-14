import { writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  // GitHub репозиторій зі Strapi
  repo: 'uniia-com-ua/strapi-api',
  // Версія для завантаження (можна передати як аргумент)
  version: process.argv[2] || 'latest',
  // Куди зберігати
  outputPath: join(__dirname, '../src/lib/generated.ts')
};

function buildDownloadUrl(version) {
  if (version === 'latest') {
    return `https://github.com/${config.repo}/releases/latest/download/generated.ts`;
  }
  return `https://github.com/${config.repo}/releases/download/${version}/generated.ts`;
}

async function downloadAndSave() {
  try {
    const downloadUrl = buildDownloadUrl(config.version);
    
    console.log(`🔍 Завантажую типи з релізу ${config.version}...`);
    console.log(`📥 URL: ${downloadUrl}`);
    
    const response = await fetch(downloadUrl);
    
    if (!response.ok) {
      throw new Error(`Download failed: ${response.status} ${response.statusText}`);
    }
    
    const content = await response.text();
    
    console.log('💾 Зберігаю generated.ts...');
    await writeFile(config.outputPath, content, 'utf8');
    
    console.log(`✅ Типи успішно оновлено з релізу ${config.version}!`);
  } catch (error) {
    console.error('❌ Помилка:', error.message);
    console.error('💡 Перевірте, чи існує реліз та файл generated.ts у ньому');
    process.exit(1);
  }
}

downloadAndSave();