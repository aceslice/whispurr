import { predefinedQueries } from "./queries.js";
import { randomEmo } from "./randomEmo.js";
// Get references to DOM elements
const userInputElement = document.querySelector(".user-input");
const send = document.querySelector(".send");
const chatContainer = document.querySelector(".chat");
const toggle = document.getElementById("toggleEncryption");
// Function to handle click event
const messages = document.querySelectorAll(".message"); // Select all elements with class "message"
let encryptionEnabled = false; // Flag to track if encryption is enabled or not
let key = generateEncryptionKey(); // Generate an encryption key
// Add event listener to the toggle switch
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener("change", handleToggle);
// Function to handle the toggle switch
function handleToggle(event) {
    const isChecked = event.target.checked;
    if (isChecked) {
        // Encryption is enabled
        encryptionEnabled = true;
        encryptMessages(); // Encrypt all messages
        addDecryptionListener(); // Add decryption listener to messages
        twemoji.parse(document.body)
    }
    else {
        const password = prompt("Enter password or PIN:");
        if (password === "password") {
            // Correct password entered, disable encryption
            encryptionEnabled = false;
            decryptMessages(); // Decrypt all messages
            removeDecryptionListener(); // Remove decryption listener from messages
        }
        else {
            // Wrong password entered, show alert and revert the toggle switch
            alert("Wrong password. Please try again.");
            event.target.checked = true;
        }
    }
}
// Function to encrypt messages
function encryptMessages() {
    const messages = document.querySelectorAll(".message");
    messages.forEach((message, index) => {
        const text = message.textContent;
        message.setAttribute("data-custom", numCrypt(text).numcrypt); // Encrypt message text and set as attribute
        message.innerHTML = emojiMessage(numCrypt(text).numcrypt); // Convert encrypted message to emojis
    });
}
// Function to decrypt messages
function decryptMessages() {
    const messages = document.querySelectorAll(".message");
    messages.forEach((message) => {
        const text = message.getAttribute("data-custom"); // Get encrypted message from attribute
        message.innerHTML = decrypt(text); // Decrypt and set message content
    });
}
// Function to add decryption listener to messages
function addDecryptionListener() {
    messages.forEach((message) => {
        message.addEventListener("dblclick", handleDecryption);
    });
}
// Function to remove decryption listener from messages
function removeDecryptionListener() {
    messages.forEach((message) => {
        message.removeEventListener("dblclick", handleDecryption);
    });
}
// Function to handle decryption on double-click
function handleDecryption(event) {
    const clickedElement = event.target;
    const encryptedText = clickedElement.getAttribute("data-custom"); // Get encrypted text
    clickedElement.innerHTML = decrypt(encryptedText); // Decrypt and set message content
}
// Event listener for send button click
send === null || send === void 0 ? void 0 : send.addEventListener("click", () => {
    sendMessage();
});
// Event listener for user input (Enter key)
userInputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
});
// Function to generate an encryption key
function generateEncryptionKey() {
    let encryptionKey = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~`!@#$%^&*()_+}{\":;'[]=-?><,./"
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
    return encryptionKey;
}
// Function to encrypt text using the encryption key
function numCrypt(text) {
    let result = [];
    for (let t of text) {
        result.push(" " + (key.includes(t) ? key.indexOf(t) : t));
    }
    return { numcrypt: result.join("").toString(), result: result };
}
// Function to decrypt text using the encryption key
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
// Function to convert encrypted numbers to emojis
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
// Function to send a user message
function sendMessage() {
    const trimmedMessage = userInputElement.value.trim(); // Trim the input message
    if (trimmedMessage === "") {
        return null;
    }
    userInputElement.value = ""; // Clear the input field
    let messageToSend;
    if (encryptionEnabled) {
        messageToSend = emojiMessage(numCrypt(trimmedMessage).numcrypt); // Encrypt and convert to emojis
    }
    else {
        messageToSend = trimmedMessage;
    }
    const textContainer = document.createElement("p");
    let userMessasge = document.createTextNode(messageToSend);
    textContainer.setAttribute("data-custom", numCrypt(trimmedMessage).numcrypt);
    textContainer.appendChild(userMessasge);
    textContainer.classList.add("message");
    const imgElement = document.createElement("img");
    imgElement.classList.add("profile");
    const imgUrl = "https://pps.whatsapp.net/v/t61.24694-24/322231611_731148275454076_7263505151536066243_n.jpg?ccb=11-4&oh=01_AdS9uqAHqshGtZjPIHN657tFfM2WNrURFQizjDWRJSI9xg&oe=64A3B81D";
    imgElement.src = imgUrl;
    const userElement = document.createElement("div");
    userElement.classList.add("user");
    userElement.appendChild(textContainer);
    userElement.appendChild(imgElement);
    chatContainer === null || chatContainer === void 0 ? void 0 : chatContainer.appendChild(userElement);
    userElement.scrollIntoView(true);
    setTimeout(() => {
        reply(trimmedMessage); // Send a reply after a delay
    }, 3000);
}
// Function to generate a reply based on user input
function reply(userText) {
    const botText = predefinedQueries[userText.toLowerCase()] || userText;
    let messageToSend;
    if (encryptionEnabled) {
        messageToSend = emojiMessage(numCrypt(botText).numcrypt); // Encrypt and convert to emojis
    }
    else {
        messageToSend = botText || botText;
    }
    const textContainer = document.createElement("p");
    textContainer.setAttribute("data-custom", numCrypt(botText).numcrypt);
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
const observer = new MutationObserver((mutationsList) => {
    // Callback function to execute when a mutation occurs
    // Check if any new nodes have been added to the body
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            console.log("toggled");
            twemoji.parse(document.body);
        }
    }
});
// Configure the observer to watch for changes in the child nodes
const observerConfig = { childList: true };
// Start observing the body for mutations
observer.observe(chatContainer, observerConfig);
// To stop observing, you can use:
// observer.disconnect();
