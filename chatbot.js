const recognition = new webkitSpeechRecognition();
const synth = window.speechSynthesis;

document.getElementById('chatbot-btn').addEventListener('click', () => {
  document.getElementById('chatbot-container').style.display = 'block';
});

document.getElementById('voice-btn').addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const query = event.results[0][0].transcript;
  document.getElementById('chat-input').value = query;
  respond(query);
};

function respond(query) {
  let response = 'Sorry, I didn\'t understand.';
  if (query.toLowerCase().includes('scheme')) response = 'Check PM Kisan for subsidies.';
  if (query.toLowerCase().includes('weather')) response = 'Today is sunny, 28°C.';
  if (query.toLowerCase().includes('crop')) response = 'Recommended crops: Rice, Wheat.';
  // Add more logic...
  speak(response);
  document.getElementById('chat-messages').innerHTML += `<p>${response}</p>`;
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}