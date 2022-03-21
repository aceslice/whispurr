let sendBtn = document.querySelector(".send");
let container = document.querySelector(".chat")

sendBtn.addEventListener("click", () => {
    let userText = document.querySelector(".user-input").value;
    let user = document.createElement("div");
    let userInput = document.createElement("p");
    let input = document.createTextNode(userText);
    user.classList.add("user");
    userInput.append(input);
    user.append(userInput);
    container.append(user)
    userText = " ";
    setTimeout(() => {
        let userText = document.querySelector(".user-input").value;
        let user = document.createElement("div");
        let userInput = document.createElement("p");
        let input = document.createTextNode(userText);
        user.classList.add("bot");
        userInput.append(input);
        user.append(userInput);
        container.append(user)
    }, 2000);
});