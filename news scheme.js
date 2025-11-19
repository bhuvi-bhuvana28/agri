let currentLang = 'en';
let translations = {};

fetch('/api/languages')
  .then(res => res.json())
  .then(data => {
    translations = data;
    updateLanguage();
  });

document.getElementById('language-select').addEventListener('change', (e) => {
  currentLang = e.target.value;
  updateLanguage();
});

function updateLanguage() {
  document.getElementById('nav-home').textContent = translations[currentLang].home;
  document.getElementById('nav-news').textContent = translations[currentLang].news;
  document.getElementById('nav-schemes').textContent = translations[currentLang].schemes;
  document.getElementById('nav-dashboard').textContent = translations[currentLang].dashboard;
  document.getElementById('nav-login').textContent = translations[currentLang].login;
  document.getElementById('welcome').textContent = translations[currentLang].welcome;
  document.getElementById('news-title').textContent = translations[currentLang].newsTitle;
  document.getElementById('schemes-title').textContent = translations[currentLang].schemesTitle;
  // Load news and schemes
  loadNews();
  loadSchemes();
}

function loadNews() {
  fetch('/api/news')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('news-list');
      list.innerHTML = data.map(item => `<div><h5>${item.title}</h5><p>${item.description}</p></div>`).join('');
    });
}

function loadSchemes() {
  fetch('/api/schemes')
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('schemes-list');
      list.innerHTML = data.map(item => `
        <div class="col-md-4">
          <img src="${item.image}" class="img-fluid">
          <h5>${item.name}</h5>
          <p>${item.description}</p>
          <p>Eligibility: ${item.eligibility}</p>
          <a href="${item.applyLink}">Apply</a>
        </div>
      `).join('');
    });
}