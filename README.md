# 🚀 **IncluSound – HackTeen-2025**

## 📌 **Sobre o Projeto**
O mundo é composto por pessoas distintas que se comunicam e interagem com as informações de maneiras diversas, seja por **preferência ou necessidade**. O acesso ao conhecimento é um **direito de todos**, mas nem sempre as informações são transmitidas de maneira acessível.

A **IncluSound** é uma startup que transforma **palavras em voz**, garantindo que cada pessoa, independentemente de sua forma de comunicação, possa acessar a informação de maneira **livre e inclusiva**.

Nosso objetivo é **eliminar barreiras** e tornar o conhecimento acessível para todos, utilizando **tecnologia de conversão de texto em áudio** e explorando novas formas de inclusão digital.

---

## 📹 **Vídeo de Apresentação**
📌 **Confira nosso vídeo de apresentação para entender melhor nossa missão e impacto:**  
🔗 [Link para o vídeo](https://drive.google.com/file/d/1QuJRXKtw6HG32_TSYoRTWFBetbi_uI9v/view?usp=sharing)

---

## 📂 **Estrutura do Projeto**

📁 backend/ → Código do servidor e lógica da aplicação  
📁 frontend_web/ → Interface web do usuário  
📁 frontend_mobile/ → Aplicação mobile  
📁 docs/ → Documentação e guias de uso  

---

## 🛠 **Como Instalar e Rodar**
### **Backend**
1️⃣ **Criar um arquivo `.env`** baseado no `exemplo.env`.  
2️⃣ **Instalar dependências**: 

  ```bash
   npm install
  ```

3️⃣ **Iniciar o servidor**:

  ```bash
    nodemon server.js
  ```

### **Frontend Web**
1️⃣ Instalar dependências:

  ```bash
    npm install
  ```

2️⃣ Iniciar o projeto:

  ```bash
    npm start
  ```

### **Frontend Mobile**
1️⃣ Instalar dependências:

  ```bash
    npm install
  ```

2️⃣ Rodar no navegador:

  ```bash
    npx expo start --web
  ```

---

## 📡 **Funcionalidades**

🔹 🚀 Conversão de Texto para Áudio: Transforma qualquer texto em áudio com alta qualidade usando node-gtts.

🔹 📝 Resumo Inteligente de Textos: Utiliza node-summary para criar versões compactas dos textos, facilitando a compreensão.

🔹 🔒 Autenticação Segura: Implementação de cadastro e login com autenticação JWT, garantindo segurança aos usuários.

---

## 📄 **Documentação da API**

📌 A API segue o padrão REST e está documentada no Swagger.

✅ Acesse a documentação Swagger: 🔗 http://localhost:5000/api-docs

---

### Endpoints Principais

| Método | Rota | Descrição |
| ------------- | ------------- | ------------- |
| POST  | /texttosound  | Converte um texto em áudio |
| POST  | /summarize  | Resume um texto automaticamente |
| POST | /signup | Registra um novo usuário |
| PUT | /signin | Autentica um usuário existente |
| GET | /yourtexts | Lista os textos processados pelo usuário |

---

## 🚀 **Roadmap e Melhorias Futuras**

🔹 Implementação de inteligência artificial para personalização do usuário.

🔹 Tradução para Libras e exploração de Braile digital.

🔹 Ajustes na qualidade do áudio e entonação.

🔹 Expansão da acessibilidade para novos formatos.

---

## 💠 **Tecnologias utilizadas**
[![My Skills](https://skillicons.dev/icons?i=vscode,nodejs,npm,sqlite,sequelize&theme=light)](https://skillicons.dev)




