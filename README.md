# EduVeda 
Welcome to **EduVeda** 📚

## Project Overview  
**EduVeda** is a lightweight, multilingual AI-powered educational platform that generates curriculum-aligned content in 22+ Indian languages. Designed for **100% offline operation** with **zero reliance on cloud services**, EduVeda runs efficiently on low-resource devices (4-8GB RAM) without requiring internet connectivity.


## Tech Stack  

### **Frontend**  
- **React 19** with TypeScript  
- **Vite**  
- **Tailwind CSS**  
- **React Router DOM**  
- **Recharts** (Data Visualization)  
- **KaTeX** (Math Rendering)  
- **HTML5 Canvas API**  

### **Backend**  
- **Node.js + Express** with TypeScript  
- **MongoDB** (Local session management)  
- **ChromaDB** (Local vector embeddings)  
- **Tesseract.js** (OCR)  
- **Ollama** (Local AI inference)  

### **Mobile**  
- **Expo + React Native**  
- **Expo Router**  
- **Expo Camera**  
- **Expo SQLite** (Local storage)  
- **llama.rn** (On-device AI processing)  

### **AI & Machine Learning**  
- **DeepSeek-R1 1.5B** (Local reasoning model)  
- **NLLB-200 600M** (Local multilingual translation)  
- **ChromaDB** (Local vector database)  
- **Tesseract.js** (Local OCR)  

## Features  
- **AI Whiteboard (AI-Board)** 📝 - Canvas-based drawing with AI-powered card operations  
- **AI Chat Interface** 💬 - Document upload with RAG-powered multilingual chat  
- **Learning Material Resource (LMR)** 📚 - Generate summaries, quizzes, and revision notes  
- **Educational Poster Generation** 🖼️ - Culturally relevant educational posters  
- **Offline Content Generator (Stitch)** 🌎 - Real-time multilingual content generation  
- **Mobile Application** 📱 - Cross-platform offline-capable mobile app  

## Setup and Installation  
1. **Clone this repository:**  
   ```bash
   git clone https://github.com/AdeshDiwate/EduVeda.git
   ```
2. **Install frontend dependencies:**  
   ```bash
   cd frontend
   npm install
   ```
3. **Install backend dependencies:**  
   ```bash
   cd ../backend
   npm install
   ```
4. **Setup Ollama (Required for AI features):**  
   ```bash
   # Install Ollama from https://ollama.ai
   # Pull required models
   ollama pull deepseek-r1:1.5b
   ```
5. **Setup ChromaDB (Required for vector storage):**  
   ```bash
   # ChromaDB runs locally, no cloud setup needed
   # Follow ChromaDB installation guide
   ```
6. **Start backend server:**  
   ```bash
   cd backend
   npm run dev
   ```
7. **Start frontend development server:**  
   ```bash
   cd frontend
   npm run dev
   ```

**Note:** EduVeda is **100% offline** and requires **no external API keys** or cloud services. All AI processing happens locally using Ollama and local models.

## Contributing  
**Contributions are welcomed!** 😁  
Let's keep the spirit of open source alive!  

### **Important**  
- Please follow the project's **license terms** before redistributing or modifying.  
- Creating something from scratch takes a lot of hard work, and I hope you respect that. 😄  
- If you have any questions or need permission for something specific, feel free to reach out.  

---


<!-- ********************************************************
-----------Adesh Commands to run this Project-----------
******************************************************** -->

Powershell 1 -

cd backend\proxy
$env:NLLB_MODEL_PATH="C:\Users\Asus\.cache\huggingface\hub\models--facebook--nllb-200-distilled-600M\snapshots\f8d333a098d19b4fd9a8b18f94170487ad3f821d"
python nllb_server.py

Powershell 2 -
cd backend\proxy
venv\Scripts\activate
npm run dev

Powershell 3 -
cd frontend
npm run dev

Powershell 4 -
cd backend
chroma run --host localhost --port 8000


