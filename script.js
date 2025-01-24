const apiKey = "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"; // Ganti dengan API Key Anda

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<div><strong>Anda:</strong> ${userInput}</div>`;

    document.getElementById("user-input").value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // Cek apakah ada perintah otomatis
    if (userInput.toLowerCase() === "waktu") {
        let currentTime = new Date().toLocaleTimeString();
        chatBox.innerHTML += `<div><strong>Bot:</strong> Sekarang jam ${currentTime}</div>`;
        return;
    } else if (userInput.toLowerCase() === "buka google") {
        window.open("https://www.google.com", "_blank");
        chatBox.innerHTML += `<div><strong>Bot:</strong> Google telah dibuka!</div>`;
        return;
    }

    // Kirim ke OpenAI API
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    let botReply = data.choices[0].message.content;

    chatBox.innerHTML += `<div><strong>Bot:</strong> ${botReply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
}
