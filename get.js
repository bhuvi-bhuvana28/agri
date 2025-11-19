const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Serve JSON data
app.get('/api/languages', (req, res) => {
  const data = JSON.parse(fs.readFileSync('languages.json', 'utf8'));
  res.json(data);
});

app.get('/api/news', (req, res) => {
  const data = JSON.parse(fs.readFileSync('news.json', 'utf8'));
  res.json(data);
});

app.get('/api/schemes', (req, res) => {
  const data = JSON.parse(fs.readFileSync('schemes.json', 'utf8'));
  res.json(data);
});

// Sample weather API (mock)
app.get('/api/weather', (req, res) => {
  res.json({ location: 'Delhi', temp: '28°C', condition: 'Sunny' });
});

// Sample crop suggestion
app.get('/api/crops', (req, res) => {
  res.json(['Rice', 'Wheat', 'Cotton']);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});