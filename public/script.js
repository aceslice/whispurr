import { predefinedQueries } from "./queries.js";
import { randomEmo } from "./randomEmo.js";
// Get references to DOM elements
const userInputElement = document.querySelector(".user-input");
const send = document.querySelector(".send");
const chatContainer = document.querySelector(".chat");
const toggle = document.getElementById("toggleEncryption");
let userText = userInputElement.value;
function handleClick(event) {
    const doubleClickedElement = event.getAttribute("data-custom");
    return doubleClickedElement;
}
const messages = document.querySelectorAll(".message");
let encryptionEnabled = false;
let key = generateEncryptionKey();
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener("change", handleToggle);
function handleToggle(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
        encryptionEnabled = true;
        encryptMessages();
        addDecryptionListener();
    }
    else {
        const password = prompt("Enter password or PIN:");
        if (password === "password") {
            encryptionEnabled = false;
            decryptMessages();
            removeDecryptionListener();
        }
        else {
            alert("Wrong password. Please try again.");
            // Revert the toggle switch back to the "on" position
            event.target.checked = true;
        }
    }
}
function encryptMessages() {
    const messages = document.querySelectorAll(".message");
    messages.forEach((message, index) => {
        const text = message.textContent;
        message.setAttribute("data-custom", numCrypt(text).numcrypt);
        message.innerHTML = (emojiMessage(numCrypt(text).numcrypt));
    });
}
function decryptMessages() {
    const messages = document.querySelectorAll(".message");
    messages.forEach((message) => {
        const text = message.getAttribute("data-custom");
        message.innerHTML = decrypt(text);
    });
}
function addDecryptionListener() {
    messages.forEach((message) => {
        message.addEventListener("dblclick", handleDecryption);
    });
}
function removeDecryptionListener() {
    messages.forEach((message) => {
        message.removeEventListener("dblclick", handleDecryption);
    });
}
function handleDecryption(event) {
    const clickedElement = event.target;
    const encryptedText = clickedElement.getAttribute("data-custom");
    clickedElement.innerHTML = decrypt(encryptedText);
}
send === null || send === void 0 ? void 0 : send.addEventListener("click", () => {
    sendMessage();
});
userInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
function generateEncryptionKey() {
    let encryptionKey = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()_+}{\":;'[]=-?><,./"
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    return encryptionKey;
}
function numCrypt(text) {
    let result = [];
    for (let t of text) {
        result.push(" " + (key.includes(t) ? key.indexOf(t) : t));
    }
    return { numcrypt: result.join("").toString(), result: result };
}
function decrypt(text) {
    let result = [];
    let arrText = text.split(" ");
    for (let t of arrText) {
        if (t == "") {
            continue;
        }
        if (!isNaN(t)) {
            let i = Number(t);
            result.push(key.charAt(i));
        }
        else {
            result.push(t);
        }
    }
    return result.join("").toString();
}
function parseWithTwemoji(text) {
    const container = document.createElement("div");
    // container.innerHTML = twemoji.parse(text);
    return container.innerHTML;
}
function emojiMessage(message) {
    let emojis = randomEmo();
    message = message.trim();
    const numbersArray = message.split(" ");
    const emojiIndexes = numbersArray.map((numberStr) => parseInt(numberStr.trim(), 10));
    message = " ";
    emojiIndexes.forEach((emojiIndex) => {
        message += emojis[emojiIndex];
    });
    return message;
}
function sendMessage() {
    // Trim the input message to remove leading and trailing spaces
    const trimmedMessage = userInputElement.value.trim();
    if (trimmedMessage === "") {
        return null;
    }
    // Clear the input field
    userInputElement.value = "";
    let messageToSend;
    if (encryptionEnabled) {
        messageToSend = emojiMessage(numCrypt(trimmedMessage).numcrypt);
    }
    else {
        messageToSend = trimmedMessage;
    }
    const textContainer = document.createElement("p");
    let userMesmesage = document.createTextNode(messageToSend);
    textContainer.appendChild(userMesmesage);
    textContainer.classList.add("message");
    const imgElement = document.createElement("img");
    imgElement.classList.add("profile");
    const imgUrl = "https://pps.whatsapp.net/v/t61.24694-24/328285645_172177382232243_4245884041119970448_n.jpg?ccb=11-4&oh=01_AdQyus8S6MszWvuP5E6TxdAv3SIcggMz7jgdAl6H0p28FA&oe=647E2131";
    imgElement.src = imgUrl;
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.appendChild(textContainer);
    userElement.appendChild(imgElement);
    chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(userElement);
    userElement.scrollIntoView(true);
    setTimeout(() => {
        reply(trimmedMessage);
    }, 1000);
}
function reply(userText) {
    // Check if the user's input matches any predefined query
    const botText = predefinedQueries[userText.toLowerCase()] || "I'm sorry, I don't understand.";
    let messageToSend;
    if (encryptionEnabled) {
        messageToSend = emojiMessage(numCrypt(botText).numcrypt);
    }
    else {
        messageToSend = botText || botText;
    }
    const textContainer = document.createElement("p");
    const botMessage = document.createTextNode(messageToSend);
    textContainer.appendChild(botMessage);
    textContainer.classList.add("message");
    const imgElement = document.createElement("img");
    imgElement.classList.add("profile");
    const imgUrl = "../img/avatar.png";
    imgElement.src = imgUrl;
    const userElement = document.createElement("div");
    userElement.classList.add("bot");
    userElement.appendChild(textContainer);
    userElement.appendChild(imgElement);
    chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(userElement);
    userElement.scrollIntoView(true);
}

