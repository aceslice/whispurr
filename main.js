// Get the send button
var sendBtn = document.querySelector(".send");
// Get the chat container
var container = document.querySelector(".chat");
// Event to be performed when user taps on send button
sendBtn === null || sendBtn === void 0 ? void 0 : sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var userTextInput = document.querySelector(".user-input");
    var userText = userTextInput === null || userTextInput === void 0 ? void 0 : userTextInput.value;
    if (!userText) {
        return;
    }
    var user = document.createElement("div");
    var userInput = document.createElement("p");
    var input = document.createTextNode(userText);
    user.classList.add("user");
    userInput.appendChild(input);
    user.appendChild(userInput);
    container === null || container === void 0 ? void 0 : container.appendChild(user);
    setTimeout(function () {
        var botText = userText;
        // A collection of greeting responses for the bot
        var greetingResponse = [
            "Hello, I am Botty.",
            "Howdy mate.",
            "Hey, how has it been?",
        ];
        // A collection of greeting texts accepted by the bot
        var greeting = [
            "hi",
            "hello",
            "howdy",
            "hello there",
            "hi there",
            "hey",
            "hey there",
        ];
        var chatUp = [
            "how are you?",
            "how has it been?",
            "how do you do?",
            "whats up?",
            "how are you doing?",
        ];
        var chatUpResponse = [
            "I am doing great.",
            "Never better.",
            "I can't find the right word to describe how my day is going.",
            "I am doing great.",
            "Cool.",
        ];
        for (var i = 0; i < greeting.length; i++) {
            if (userText === greeting[i]) {
                var randomGreeting = greetingResponse[Math.floor(Math.random() * greetingResponse.length)];
                botText = randomGreeting;
                break;
            }
        }
        for (var j = 0; j < chatUp.length; j++) {
            if (userText === chatUp[j]) {
                botText =
                    chatUpResponse[Math.floor(Math.random() * chatUpResponse.length)];
                break;
            }
        }
        var bot = document.createElement("div");
        var botInput = document.createElement("p");
        var botInputText = document.createTextNode(botText);
        bot.classList.add("bot");
        botInput.appendChild(botInputText);
        bot.appendChild(botInput);
        container === null || container === void 0 ? void 0 : container.appendChild(bot);
    }, 1000);
});
