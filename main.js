let sendBtn = document.querySelector(".send");
let container = document.querySelector(".chat")

sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let userText = document.querySelector(".user-input").value;
    if (userText.length === 0 || userText === " ") {
        doNothing();
    }
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
        let greetingResponse = ["Hello, I am Botty. May I know your name?", "Howdy mate", "Hey, how has it been?"];
        let greeting = ["hi", "hello", "howdy", "hello there", "hi there", "hey", "hey there"];
        let chatUp = ["how are you?", "how has it been?", "how do you do?", "whats up?", "how are you doing?"];
        let chatUpResponse = ["I am doing great", "Never better", "I can not find the right word to describe how my day is going", "Great", "Cool"];
        for (let i = 0; i < greeting.length; i++) {

            if (userText === greeting[i]) {
                let randomGreeting = (greetingResponse[Math.floor(Math.random() * greetingResponse.length)]);
                botText = randomGreeting;
                break;
            }
            else {
                botText = userText;
            }
            for (let j = 0; j < chatUp.length; j++) {

                if (userText === chatUp[j]) {
                    botText = chatUpResponse[Math.floor(Math.random() * chatUpResponse.length)];
                    break;
                } else {
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
    }, 2000);

});