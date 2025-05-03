const puppeteer = require('puppeteer');

(async () => {
  // Lançar o navegador em modo não-headless para visualizar a interação
  const browser = await puppeteer.launch({ headless: false, args: ['--disable-web-security'] });
  const page = await browser.newPage();

  // Definindo o conteúdo HTML com SpeechSynthesis
  await page.setContent(`
    <html>
      <body>
        <h1>Fala automatizada com Puppeteer!</h1>
        <button id="speak">Falar</button>
        <script>
          // Função para falar o texto quando o botão é clicado
          const speakButton = document.getElementById('speak');
          speakButton.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance('Olá, isso é uma fala gerada pelo SpeechSyntesis usando Pupeeter. Eu sou a Maria! Minha voz está no um ponto cinco');
            utterance.rate = 7; // Valores comuns: 0.5 (lento), 1 (normal), 2 (rápido)
            // Alterar a voz aqui
            const voices = speechSynthesis.getVoices();
            const selectedVoice = voices.find(voice => voice.name === 'Microsoft Maria - Portuguese (Brazil)'); // Escolha da voz

            // Exibe todas as vozes disponíveis no console do navegador
            voices.forEach(voice => console.log(voice.name)); 

            // Se uma voz específica for encontrada, define ela
            if (selectedVoice) {
              utterance.voice = selectedVoice;
            }

            speechSynthesis.speak(utterance);
          });

          // Aguarda as vozes ficarem disponíveis
          speechSynthesis.onvoiceschanged = () => {
            const voices = speechSynthesis.getVoices();
            voices.forEach(voice => console.log(voice.name));  // Exibe todas as vozes disponíveis no console do navegador
          };
        </script>
      </body>
    </html>
  `);

  // Espera o botão estar pronto e clica nele para acionar a fala
  await page.waitForSelector('#speak');
  await page.click('#speak');

  // Usando o setTimeout para simular a pausa
  await page.evaluate(() => {
    return new Promise(resolve => setTimeout(resolve, 5000));
  });

})();
