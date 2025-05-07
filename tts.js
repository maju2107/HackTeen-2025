const express = require('express');
const fs = require('fs');
const path = require('path');
const gTTS = require('gtts');
const db = require('./db');

const app = express();
app.use(express.json());

const TextToSound = async (req, res) => {
  const userId = req.user.id; // This comes from verifyToken middleware
  console.log(userId)
  const { text, language } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Texto não fornecido.' });
  }

  const filename = `audio-${Date.now()}.mp3`;
  const filepath = path.join(__dirname, filename);
  const gtts = new gTTS(text, language);

  db.run(`INSERT INTO texts (content, user_id) VALUES (?, ?)`, [text, userId], function (err) {
    if (err) return res.status(400).json({ error: err.message });
    console.log(`texto: ${text}, user_id: ${userId} adicionado com sucesso!! Confiaaa`);
  });
  
  gtts.save(filepath, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao gerar áudio.' });
    }

    res.download(filepath, (err) => {
      fs.unlinkSync(filepath); 
    });
  });
};

const SummarizerManager = require('node-summarizer').SummarizerManager; // Correct import

const Summarise = async (req, res) => {
  try {
    const userId = req.user.id; // This comes from verifyToken middleware
    const { text, sentences = 3 } = req.body; // Default to 3 sentences
    
    const user = req.user;
    console.log(user);

    if (!text || typeof text !== 'string') {
      return res.status(400).json({ error: 'Valid text not provided.' });
    }

    // Create summarizer instance (using the correct class)
    const summarizer = new SummarizerManager(text, sentences);
    
    // Get the summary
    const summary = summarizer.getSummaryByFrequency().summary;
    
    db.run(`INSERT INTO texts (content, user_id) VALUES (?, ?)`, [text, userId], function (err) {
      if (err) return res.status(400).json({ error: err.message });
      console.log(`texto: ${text}, user_id: ${userId} adicionado com sucesso!! Confiaaa`);
    });

    return res.status(200).json({
      summary 
    });
    
  } catch (error) {
    console.error('Summarization error:', error);
    return res.status(500).json({ 
      error: 'Error during summarization.',
      details: error.message 
    });
  }
};

module.exports = { TextToSound, Summarise }