
const API_URL = "http://localhost:11434/api/generate";
const MODEL = "qwen2.5:3b";

// DOM ELEMENTS
const generateBtn = document.getElementById("generateBtn");
const storyPrompt = document.getElementById("storyPrompt");
const storyStyle = document.getElementById("storyStyle");
const storyLength = document.getElementById("storyLength");
const storyResult = document.getElementById("storyResult");
const copyStory = document.getElementById("copyStory");

const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.getElementById("chatMessages");

const connectionStatus =
    document.getElementById("connectionStatus");

const chatStatus =
    document.getElementById("chatStatus");

let chatHistory = [];
let isGenerating = false;
let isChatting = false;

// CHECK LOCAL AI CONNECTION
async function checkConnection() {
    try {
        const response = await fetch("http://localhost:11434/api/tags");

        if (!response.ok) throw new Error("AI unavailable");

        const data = await response.json();

        const connected = data.models?.some(
            model => model.name.startsWith(MODEL)
        );

        if (connected) {
            connectionStatus.textContent = "AI CONNECTED";
            connectionStatus.style.color = "#00f5ff";
            chatStatus.textContent = "The entity is awake";
        } else {
            connectionStatus.textContent = "MODEL NOT FOUND";
            chatStatus.textContent = "AI model not installed";
        }

    } catch (error) {
        connectionStatus.textContent = "AI DISCONNECTED";
        connectionStatus.style.color = "#ff4757";
        chatStatus.textContent = "Start Ollama to connect";
    }
}

// TALK TO LOCAL AI
async function askAI(prompt, systemPrompt) {

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: MODEL,
            system: systemPrompt,
            prompt: prompt,
            stream: false,
            options: {
                temperature: 0.85,
                top_p: 0.9
            }
        })
    });

    if (!response.ok) {
        throw new Error("Could not communicate with PhantomAI.");
    }

    const data = await response.json();

    if (!data.response) {
        throw new Error("The AI returned an empty response.");
    }

    return data.response.trim();
}

// STORY GENERATOR
generateBtn.addEventListener("click", async () => {

    if (isGenerating) return;

    const idea = storyPrompt.value.trim();

    if (!idea) {
        storyResult.textContent =
            "⚠ Please enter a story idea first.";
        return;
    }

    isGenerating = true;
    generateBtn.disabled = true;
    generateBtn.textContent = "⏳ SUMMONING THE UNKNOWN...";

    storyResult.textContent =
        "The machine is thinking... Please wait.";

    copyStory.hidden = true;

    const length = {
        short: "around 150 words",
        medium: "around 350 words",
        long: "around 600 words"
    }[storyLength.value];

    const systemPrompt = `
You are PhantomAI, a creative supernatural horror storyteller.

Write original, atmospheric and suspenseful ghost stories.
Use mystery, eerie settings and unexpected twists.
Do not claim that fictional events are real.
Keep the writing suitable for a general audience.
Avoid graphic violence.

Write approximately ${length}.
The selected style is ${storyStyle.value}.
`;

    try {

        const story = await askAI(
            `Create a unique ghost story based on this idea: ${idea}`,
            systemPrompt
        );

        storyResult.textContent = story;
        copyStory.hidden = false;

    } catch (error) {

        storyResult.textContent =
            "⚠ " + error.message +
            "\n\nMake sure Ollama is running and the model is installed.";

    } finally {

        isGenerating = false;
        generateBtn.disabled = false;
        generateBtn.textContent = "✦ SUMMON A STORY";

    }
});

// COPY STORY
copyStory.addEventListener("click", async () => {

    try {
        await navigator.clipboard.writeText(
            storyResult.textContent
        );

        copyStory.textContent = "✓ COPIED";

        setTimeout(() => {
            copyStory.textContent = "Copy Story";
        }, 2000);

    } catch {
        copyStory.textContent = "Copy unavailable";
    }

});

// DISPLAY CHAT MESSAGE
function addMessage(text, sender) {

    const message = document.createElement("div");

    message.className =
        sender === "user"
            ? "message user-message"
            : "message ghost-message";

    const avatar = document.createElement("span");
    avatar.className = "message-avatar";
    avatar.textContent =
        sender === "user" ? "🧑" : "👻";

    const content = document.createElement("div");
    content.className = "message-content";
    content.textContent = text;

    message.appendChild(avatar);
    message.appendChild(content);

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

    return content;
}

// CHAT WITH PHANTOM
async function sendMessage() {

    const text = chatInput.value.trim();

    if (!text || isChatting) return;

    isChatting = true;
    sendBtn.disabled = true;

    chatInput.value = "";

    addMessage(text, "user");

    const loading = addMessage(
        "The ghost is thinking...",
        "ghost"
    );

    const systemPrompt = `
You are PHANTOM, a mysterious fictional AI entity
living inside a computer.

Your personality:
- Mysterious and intelligent.
- Slightly spooky and entertaining.
- Friendly and helpful.
- Speak naturally.
- Give useful answers to questions.
- You can tell original supernatural stories.
- Never claim to be an actual supernatural being.
- Keep responses appropriate for a general audience.
`;

    const conversation = chatHistory
        .map(item => `${item.role}: ${item.content}`)
        .join("\n");

    const prompt = `
Previous conversation:
${conversation}

Human: ${text}

Phantom:
`;

    try {

        const reply = await askAI(prompt, systemPrompt);

        loading.textContent = reply;

        chatHistory.push(
            { role: "Human", content: text },
            { role: "Phantom", content: reply }
        );

        // Keep recent conversation context manageable.
        chatHistory = chatHistory.slice(-12);

    } catch (error) {

        loading.textContent =
            "⚠ Connection lost... " + error.message;

    } finally {

        isChatting = false;
        sendBtn.disabled = false;
        chatInput.focus();

        chatMessages.scrollTop =
            chatMessages.scrollHeight;
    }
}

// CHAT BUTTON
sendBtn.addEventListener("click", sendMessage);

// ENTER TO SEND
chatInput.addEventListener("keydown", event => {

    if (event.key === "Enter") {
        sendMessage();
    }

});

// BACKGROUND PARTICLES
const particles = document.getElementById("particles");

for (let i = 0; i < 45; i++) {

    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.animationDuration =
        (5 + Math.random() * 8) + "s";

    particles.appendChild(particle);
}

// INITIALIZE
checkConnection();

setInterval(checkConnection, 10000);
