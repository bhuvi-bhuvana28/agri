fetch('/api/weather')
  .then(res => res.json())
  .then(data => {
    document.getElementById('weather').innerHTML = `<h3>Weather: ${data.temp}, ${data.condition}</h3>`;
  });

fetch('/api/crops')
  .then(res => res.json())
  .then(data => {
    document.getElementById('crops').innerHTML = `<h3>Recommended Crops: ${data.join(', ')}</h3>`;
  });

// Load suggested schemes
fetch('/api/schemes')
  .then(res => res.json())
  .then(data => {
    document.getElementById('schemes-suggest').innerHTML = `<h3>Suggested Schemes: ${data.map(s => s.name).join(', ')}</h3>`;
  });