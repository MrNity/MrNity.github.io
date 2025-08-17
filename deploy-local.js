const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Локальный деплой sleep-tracker...');

try {
  // Переходим в папку проекта и собираем
  console.log('📦 Сборка проекта...');
  process.chdir('./dev/sleep-tracker');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Возвращаемся в корень
  process.chdir('../../');
  
  // Очищаем папку sleeptracker (кроме .gitkeep)
  console.log('🧹 Очистка папки sleeptracker...');
  const sleeptrackerDir = './sleeptracker';
  const files = fs.readdirSync(sleeptrackerDir);
  files.forEach(file => {
    if (file !== '.gitkeep') {
      const filePath = path.join(sleeptrackerDir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        fs.rmSync(filePath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(filePath);
      }
    }
  });
  
  // Копируем файлы из dist
  console.log('📁 Копирование файлов...');
  const distDir = './dev/sleep-tracker/dist';
  const distFiles = fs.readdirSync(distDir);
  
  function copyRecursive(src, dest) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      const files = fs.readdirSync(src);
      files.forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }
  
  distFiles.forEach(file => {
    const srcPath = path.join(distDir, file);
    const destPath = path.join(sleeptrackerDir, file);
    copyRecursive(srcPath, destPath);
  });
  
  console.log('✅ Деплой завершен! Файлы скопированы в папку sleeptracker/');
  console.log('🌐 Теперь можно коммитить и пушить изменения');
  
} catch (error) {
  console.error('❌ Ошибка при деплое:', error.message);
  process.exit(1);
}