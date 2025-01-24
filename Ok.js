if (userInput.toLowerCase() === "ceritakan lelucon") {
    let jokes = [
        "Kenapa ayam nyebrang jalan? Karena mau ke seberang!",
        "Apa bedanya kucing dan komputer? Kucing punya meong, komputer punya mouse!",
    ];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    chatBox.innerHTML += `<div><strong>Bot:</strong> ${randomJoke}</div>`;
    return;
}
