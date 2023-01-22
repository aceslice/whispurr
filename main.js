// Get the send button
let sendBtn = document.querySelector(".send");

// Get the chat container
let container = document.querySelector(".chat");

// Event to be performed when user taps on send button
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let userText = document.querySelector(".user-input").value;
  let user = document.createElement("div");
  let userInput = document.createElement("p");
  let input = document.createTextNode(userText);
  user.classList.add("user");
  userInput.append(input);
  user.append(userInput);
  container.append(user);
  setTimeout(() => {
    let botText;
    let userText = document.querySelector(".user-input").value;

    // A collection of greeting responses for the bot
    let greetingResponse = [
      "Hello, I am Botty.",
      "Howdy mate.",
      "Hey, how has it been?",
    ];

    // A collection of greeting texts accepted by the bot
    let greeting = [
      "hi",
      "hello",
      "howdy",
      "hello there",
      "hi there",
      "hey",
      "hey there",
    ];
    let chatUp = [
      "how are you?",
      "how has it been?",
      "how do you do?",
      "whats up?",
      "how are you doing?",
    ];
    let chatUpResponse = [
      "I am doing great.",
      "Never better.",
      "I can not find the right word to describe how my day is going.",
      "I am doing Great",
      "Cool.",
    ];
    for (let i = 0; i < greeting.length; i++) {
      if (userText === greeting[i]) {
        let randomGreeting =
          greetingResponse[Math.floor(Math.random() * greetingResponse.length)];
        botText = randomGreeting;
        break;
      } else {
        botText = userText;
      }
      for (let j = 0; j < chatUp.length; j++) {
        if (userText === chatUp[j]) {
          botText =
            chatUpResponse[Math.floor(Math.random() * chatUpResponse.length)];
          break;
        } else {
          // The bot return whatever texts you typed back to you since it does not match its predifined texts
          botText = userText;
        }
      }
    }
    let user = document.createElement("div");
    let userInput = document.createElement("p");
    let input = document.createTextNode(botText);
    user.classList.add("bot");
    userInput.append(input);
    user.append(userInput);
    container.append(user);
    userText = " ";
    // Fix by Kofi Pascal
    // Make the bot respond within a second
  }, 1000);
});
