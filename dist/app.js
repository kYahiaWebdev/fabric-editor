const express = require('express');
const path = require('path');

const PORT = 4000;

const app = express();
app.listen(PORT, () => console.log('Listening to ', PORT));

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});
app.get('/style.css', (req, res) => {
   res.sendFile(path.join(__dirname, './style.css'));
});
app.get('/main.js', (req, res) => {
   res.sendFile(path.join(__dirname, './main.js'));
});
app.get('/assets/image.png', (req, res) => {
   res.sendFile(path.join(__dirname, '../assets/image.png'));
});

