# 👻 PhantomAI – Intelligence Beyond the Unknown

<p align="center">
  <img src="https://img.shields.io/badge/AI-Open--Weight-purple?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Hacktoberfest-2026-orange?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Powered%20By-Ollama-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JS-blue?style=for-the-badge" />
</p>

<p align="center">
  <b>Something is awake inside your machine. Are you ready to communicate?</b>
</p>

---

## 🌌 About PhantomAI

**PhantomAI** is an interactive AI-powered web experience inspired by the supernatural concept of *Ghost in the Machine*.

It combines artificial intelligence with a mysterious Halloween-inspired interface to create a digital entity that users can communicate with.

PhantomAI allows users to generate original horror stories and interact with an AI ghost using an open-weight language model running locally through Ollama.

The project explores how open-source AI can make intelligent applications more accessible, private, customizable, and independent of expensive hosted AI APIs.

## ✨ Key Features

- 👻 **AI Ghost Chatbot:** Communicate with a mysterious AI entity.
- 📖 **AI Story Generator:** Create unique horror stories from custom prompts.
- 🌑 **Dark Futuristic UI:** Experience a spooky interface with neon effects and animations.
- 🔒 **Privacy-Focused:** Run AI inference locally on your machine.
- ⚡ **Open-Weight AI:** Powered by Qwen 2.5 through Ollama.
- 📱 **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- 🎃 **Halloween Experience:** A supernatural atmosphere inspired by the Ghost in the Machine theme.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling, animations and responsive design |
| JavaScript | Frontend functionality and AI integration |
| Ollama | Local AI model execution |
| Qwen 2.5 | Open-weight language model |

## 📁 Project Structure

```text
PhantomAI/
│
├── index.html       # Main website structure
├── style.css        # Website styling and animations
├── script.js        # AI integration and interactions
└── README.md        # Project documentation
```

## 🚀 Installation and Setup

Follow these steps to run PhantomAI locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd PhantomAI
```

### 3. Install Ollama

Download and install Ollama:

https://ollama.com/download

### 4. Download the AI Model

Open your terminal and run:

```bash
ollama pull qwen2.5:3b
```

This downloads the Qwen 2.5 3B model to your computer.

### 5. Configure Ollama

For local development on Windows PowerShell, configure browser access:

```powershell
$env:OLLAMA_ORIGINS="*"
ollama serve
```

For better security, restrict allowed origins to your local development origin instead of using a wildcard.

### 6. Launch the Website

1. Open the PhantomAI folder in Visual Studio Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.
5. Keep Ollama running in the background.

Your PhantomAI website is ready!

## ⚙️ How PhantomAI Works

```text
       USER
        |
        v
   PHANTOMAI WEBSITE
        |
        v
   JAVASCRIPT REQUEST
        |
        v
   LOCAL OLLAMA API
        |
        v
    QWEN 2.5 MODEL
        |
        v
   AI GENERATED RESPONSE
        |
        v
   DISPLAY ON WEBSITE
```

1. The user enters a prompt or asks a question.
2. JavaScript sends the request to the local Ollama API.
3. Qwen 2.5 processes the request.
4. The model generates an AI response.
5. PhantomAI displays the response to the user.

## 🔐 Why Open Innovation Matters

PhantomAI demonstrates the potential of open-weight artificial intelligence in building creative and interactive applications.

Instead of relying on proprietary AI APIs, PhantomAI uses a locally running open-weight model.

**Benefits of this approach:**

- **Privacy:** Conversations can remain on the user's local machine.
- **Accessibility:** No paid hosted AI API is required.
- **Customization:** Developers can experiment with different models and prompts.
- **Offline Capability:** Local inference can work without internet after downloading the model.
- **Independence:** The application is not tied to a single proprietary AI provider.

## 🔮 Future Improvements

- [ ] Voice-based communication with the AI ghost.
- [ ] AI-generated supernatural images.
- [ ] Chat history and saved conversations.
- [ ] More horror story categories.
- [ ] Support for additional open-weight models.
- [ ] Improved offline functionality.
- [ ] Customizable AI personalities.

## 🎃 Hacktoberfest 2026 – Week 4

**Challenge:** Ghost in the Machine

**Project:** PhantomAI

**Theme:** Open-Source AI and Supernatural Experiences

PhantomAI is my interpretation of the challenge, combining artificial intelligence, supernatural storytelling, and open-weight models to create an interactive digital experience.

## 👨‍💻 Author

**Priyanshu Saroj**

- GitHub: [@priyanshusaroj385-boop](https://github.com/priyanshusaroj385-boop)

## ⭐ Support

If you like PhantomAI, consider giving this repository a ⭐ on GitHub.

Contributions, ideas, and feedback are welcome!

---

<p align="center">
  <b>👻 PHANTOMAI</b>
  <br/>
  <i>Intelligence Beyond the Unknown.</i>
  <br/><br/>
  The machine never sleeps. The unknown is always listening.
</p>