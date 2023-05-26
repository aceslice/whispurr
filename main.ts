// Get the send button
const sendBtn = document.querySelector<HTMLButtonElement>(".send");

// Get the chat container
const container = document.querySelector<HTMLElement>(".chat");

// Event to be performed when user taps on send button
sendBtn?.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault();
  const userTextInput = document.querySelector<HTMLInputElement>(".user-input");
  const userText = userTextInput?.value;

  if (!userText) {
    return;
  }

  const user = document.createElement("div");
  const userInput = document.createElement("p");
  const input = document.createTextNode(userText);

  user.classList.add("user");
  userInput.appendChild(input);
  user.appendChild(userInput);
  container?.appendChild(user);

  setTimeout(() => {
    let botText = userText;

    // A collection of greeting responses for the bot
    const greetingResponse = [
      "Hello, I am Botty.",
      "Howdy mate.",
      "Hey, how has it been?",
    ];

    // A collection of greeting texts accepted by the bot
    const greeting = [
      "hi",
      "hello",
      "howdy",
      "hello there",
      "hi there",
      "hey",
      "hey there",
    ];
    const chatUp = [
      "how are you?",
      "how has it been?",
      "how do you do?",
      "whats up?",
      "how are you doing?",
    ];
    const chatUpResponse = [
      "I am doing great.",
      "Never better.",
      "I can't find the right word to describe how my day is going.",
      "I am doing great.",
      "Cool.",
    ];

    for (let i = 0; i < greeting.length; i++) {
      if (userText === greeting[i]) {
        const randomGreeting =
          greetingResponse[Math.floor(Math.random() * greetingResponse.length)];
        botText = randomGreeting;
        break;
      }
    }

    for (let j = 0; j < chatUp.length; j++) {
      if (userText === chatUp[j]) {
        botText =
          chatUpResponse[Math.floor(Math.random() * chatUpResponse.length)];
        break;
      }
    }

    const bot = document.createElement("div");
    const botInput = document.createElement("p");
    const botInputText = document.createTextNode(botText);

    bot.classList.add("bot");
    botInput.appendChild(botInputText);
    bot.appendChild(botInput);
    container?.appendChild(bot);
  }, 1000);
});
