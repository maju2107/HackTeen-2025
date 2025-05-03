const express = require('express');
const fs = require('fs');
const path = require('path');
const gTTS = require('gtts');

const app = express();
app.use(express.json());

app.post('/api/speak', async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Texto não fornecido.' });
  }

  const filename = `audio-${Date.now()}.mp3`;
  const filepath = path.join(__dirname, filename);
  const gtts = new gTTS(text, 'en-us');

  gtts.save(filepath, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao gerar áudio.' });
    }

    res.download(filepath, (err) => {
      fs.unlinkSync(filepath); // remove o arquivo após o download
    });
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
