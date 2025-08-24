
const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

/**
 * Расчет удачи для Genshin/HSR/ZZZ
 * @param {number} WR - Винрейт игрока
 * @param {number} AvgL - Средняя лега игрока
 * @param {number} N - Количество круток
 * @param {number} WR_avg - Эталонный винрейт
 * @param {number} AvgL_avg - Эталонная средняя лега
 * @param {number} N0 - Минимальное количество круток для достоверности
 */
function calcLuck(WR, AvgL, N, WR_avg, AvgL_avg, N0) {
  // Коэффициент достоверности (от 0 до 1)
  const confidence = Math.min(1, Math.sqrt(N / N0));

  // Фактор винрейта: больше винрейт = больше удачи
  const wrFactor = (WR - WR_avg) / WR_avg;

  // Фактор средней леги: меньше средняя = больше удачи
  const avgFactor = (AvgL_avg - AvgL) / AvgL_avg;

  // Комбинируем факторы с весами: винрейт 0.6, средняя лега 0.8
  const luckRaw = (wrFactor * 6.1 + avgFactor * 0.9) * confidence;

  // Масштабируем к шкале 0-100 с центром в 50
  const luck = 50 + luckRaw * 50;

  return clamp(luck, 0, 100);
}

/**
 * Расчет общей удачи для Genshin/HSR/ZZZ
 */
function totalLuck(dataChar, dataWeap) {
  const Lc = calcLuck(dataChar.WR, dataChar.AvgL, dataChar.N, 50, 75, 10000);
  const Lw = calcLuck(dataWeap.WR, dataWeap.AvgL, dataWeap.N, 75, 65, 4000);

  // Взвешенное среднее по количеству круток
  const total = (Lc * dataChar.N + Lw * dataWeap.N) / (dataChar.N + dataWeap.N);
  return clamp(total, 0, 100);
}

/**
 * Расчет удачи для WW
 * @param {number} AvgL - Средняя лега игрока
 * @param {number} N - Количество круток
 * @param {number} AvgL_avg - Эталонная средняя лега
 * @param {number} N0 - Минимальное количество круток для достоверности
 * @param {number|null} WR - Винрейт (для персонажного баннера)
 * @param {number|null} WR_avg - Эталонный винрейт
 */
function calcLuckWW(AvgL, N, AvgL_avg, N0, WR = null, WR_avg = null) {
  // Коэффициент достоверности
  const confidence = Math.min(1, Math.sqrt(N / N0));

  // Фактор средней леги
  const avgFactor = (AvgL_avg - AvgL) / AvgL_avg;

  let luckRaw = avgFactor * 0.7; // Вес средней леги 0.7

  // Если есть винрейт (персонажный баннер)
  if (WR !== null && WR_avg !== null) {
    const wrFactor = (WR - WR_avg) / WR_avg;
    luckRaw = avgFactor * 5.0 + wrFactor * 0.9; // Винрейт 0.5, средняя 0.7
  }

  // Применяем коэффициент достоверности и масштабируем
  luckRaw *= confidence;
  const luck = 50 + luckRaw * 50;

  return clamp(luck, 0, 100);
}

/**
 * Расчет общей удачи для WW
 */
function totalLuckWW(dataChar, dataWeap) {
  // Персонажный баннер: эталон 65 круток, винрейт 50%, N0 = 10000
  const Lc = calcLuckWW(dataChar.AvgL, dataChar.N, 65, 1200, dataChar.WR, 50);

  // Оружейный баннер: эталон 65 круток, без винрейта, N0 = 2000
  const Lw = calcLuckWW(dataWeap.AvgL, dataWeap.N, 65, 1200);

  // Взвешенное среднее
  const total = (Lc * dataChar.N + Lw * dataWeap.N) / (dataChar.N + dataWeap.N);
  return clamp(total, 0, 100);
}

// Обработчики событий для Genshin/HSR/ZZZ
document.getElementById('calculate').addEventListener('click', () => {
  const pullsChar = parseFloat(document.getElementById('charPulls').value);
  const winrateChar = parseFloat(document.getElementById('charWinrate').value);
  const avgChar = parseFloat(document.getElementById('charAvg').value);

  const pullsWeap = parseFloat(document.getElementById('weapPulls').value);
  const winrateWeap = parseFloat(document.getElementById('weapWinrate').value);
  const avgWeap = parseFloat(document.getElementById('weapAvg').value);

  if (!pullsChar || isNaN(winrateChar) || !avgChar || !pullsWeap || isNaN(winrateWeap) || !avgWeap) {
    document.getElementById('result').textContent = 'Пожалуйста, заполните все поля корректно.';
    return;
  }

  const dataChar = { N: pullsChar, AvgL: avgChar, WR: winrateChar };
  const dataWeap = { N: pullsWeap, AvgL: avgWeap, WR: winrateWeap };
  const score = totalLuck(dataChar, dataWeap);
  document.getElementById('result').textContent = `${graduateScore(score)}: ${score.toFixed(1)}/100`;
});

document.getElementById('reset').addEventListener('click', () => {
  ['charPulls', 'charWinrate', 'charAvg', 'weapPulls', 'weapWinrate', 'weapAvg'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('result').textContent = '';
});

// Обработчики событий для WW
document.getElementById('calculateWW').addEventListener('click', () => {
  const pullsChar = parseFloat(document.getElementById('charPullsWW').value);
  const winrateChar = parseFloat(document.getElementById('charWinrateWW').value);
  const avgChar = parseFloat(document.getElementById('charAvgWW').value);
  const pullsWeap = parseFloat(document.getElementById('weapPullsWW').value);
  const avgWeap = parseFloat(document.getElementById('weapAvgWW').value);

  if (!pullsChar || isNaN(winrateChar) || !avgChar || !pullsWeap || !avgWeap) {
    document.getElementById('result-ww').textContent = 'Пожалуйста, заполните все поля корректно.';
    return;
  }

  const dataChar = { N: pullsChar, AvgL: avgChar, WR: winrateChar };
  const dataWeap = { N: pullsWeap, AvgL: avgWeap };
  const score = totalLuckWW(dataChar, dataWeap);
  document.getElementById('result-ww').textContent = `${graduateScore(score)}: ${score.toFixed(1)}/100`;
});

document.getElementById('resetWW').addEventListener('click', () => {
  ['charPullsWW', 'charWinrateWW', 'charAvgWW', 'weapPullsWW', 'weapAvgWW'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('result-ww').textContent = '';
});

function graduateScore(score) {
  if (score < 0 || score > 100 || isNaN(score)) {
    return "Некорректный счет 😕";
  }
  if (score <= 15) {
    return "Человек с проклятием 😣";
  } else if (score <= 30) {
    return "Сильный анлакер 😞";
  } else if (score <= 60) {
    return "Обычный игрок 😐";
  } else if (score <= 90) {
    return "Свинья 🐷";
  } else {
    return "Проклятое свинство 😈";
  }
}
