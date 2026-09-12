const stats = [
  ['المشاريع', '15+', 'مستودعات منظمة'],
  ['اللغات', '10+', 'تجارب متعددة'],
  ['الواجهات', 'RTL', 'دعم عربي كامل']
];

const grid = document.querySelector('.grid');
stats.forEach(([title, value, text]) => {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `<h3>${title}</h3><strong>${value}</strong><p>${text}</p>`;
  grid.appendChild(card);
});
