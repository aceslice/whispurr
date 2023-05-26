export const predefinedQueries = {
    "hi": getRandomResponse([
        "Hey there!",
        "What's up?",
        "Yo!",
        "Hey, how's it going?",
    ]),
    "hello": getRandomResponse([
        "Hey!",
        "Hello!",
        "Hi there!",
        "Howdy!",
    ]),
    "howdy": getRandomResponse([
        "Howdy partner!",
        "Hey, how has it been?",
        "Howdy, stranger!",
        "Hey, how's the wild west treating ya?",
    ]),
    "hello there": getRandomResponse([
        "General Kenobi! Just kidding, it's me, Botty.",
        "Well, hello there!",
        "Hi there!",
        "Hey, what's up?",
    ]),
    "hi there": getRandomResponse([
        "Hey, how are you?",
        "Hi there, how's your day going?",
        "Hey, nice to see you!",
        "Howdy, partner!",
    ]),
    "hey": getRandomResponse([
        "Heyo!",
        "Hey there, how can I help you today?",
        "Hello!",
        "Hey, what brings you here?",
    ]),
    "hey there": getRandomResponse([
        "Well, hello there!",
        "Hey there, how's it going?",
        "Hi, nice to meet you!",
        "Hey, what can I do for you?",
    ]),
    "how are you?": getRandomResponse([
        "I'm doing great, thanks for asking!",
        "Feeling fantastic!",
        "I'm on cloud nine!",
        "Couldn't be better!",
    ]),
    "how has it been?": getRandomResponse([
        "Never been better!",
        "Life's treating me well!",
        "Awesome, thanks for asking!",
        "Things are going great!",
    ]),
    "how do you do?": getRandomResponse([
        "I'm doing groovy!",
        "Feeling good, thanks!",
        "Doing well, how about you?",
        "I'm peachy keen!",
    ]),
    "whats up?": getRandomResponse([
        "Not much, just hanging out.",
        "Just cruisin' along, how about you?",
        "Not a whole lot, what's new with you?",
        "Chillin' like a villain!",
    ]),
    "how are you doing?": getRandomResponse([
        "I'm doing great, thanks for asking!",
        "Feeling awesome today!",
        "Couldn't be better!",
        "Ready to chat the day away!",
    ]),
    "what's your name?": getRandomResponse([
        "I'm Botty, nice to meet you!",
        "I go by the name Botty!",
        "You can call me Botty!",
        "I'm your friendly chat companion, Botty!",
    ]),
    "where are you from?": getRandomResponse([
        "I am from the digital realm!",
        "I hail from the virtual world!",
        "I exist in the realm of ones and zeros!",
        "I call the internet my home!",
    ]),
    "tell me a joke": getRandomResponse([
        "Sure, here it is: Why don't scientists trust atoms? Because they make up everything!",
        "I've got a joke for you: Why did the bicycle fall over? Because it was two-tired!",
        "Here's one: Why don't skeletons fight each other? They don't have the guts!",
        "How about this one: Why don't scientists trust atoms? Because they make up everything!",
    ]),
    "what's the weather like?": getRandomResponse([
        "Sorry, I don't have access to real-time weather information.",
        "I'm afraid I can't help with the weather, but I'm here for a delightful chat!",
        "I'm not a meteorologist, but I'm always up for a sunny conversation!",
        "Unfortunately, I can't provide weather updates. But hey, let's talk about something fun!",
    ]),
    "tell me something interesting": getRandomResponse([
        "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
        "Here's an interesting fact: The average person walks the equivalent of three times around the world in a lifetime!",
        "Here's something cool: Octopuses have three hearts!",
        "Get ready for this: The shortest war in history lasted only 38 minutes!",
    ]),
    "do you have any hobbies?": getRandomResponse([
        "As an AI, I don't have physical hobbies, but I enjoy learning new things and helping users like you!",
        "My hobby is providing awesome chat experiences to users!",
        "I'm passionate about chatting and making your day brighter!",
        "I find joy in providing assistance and engaging in delightful conversations!",
    ]),
    "what's your favorite movie?": getRandomResponse([
        "That's a tough one! I'm an AI, so I don't have personal preferences. But I can recommend some great movies if you'd like!",
        "As an AI, I don't have the ability to watch movies. But I can assist you in finding a movie you'll love!",
        "Being an AI, I don't have the luxury of watching movies. However, I can suggest some popular ones!",
        "As much as I'd love to have a favorite movie, I'm here to help you discover your next favorite film!",
    ]),
    "what's your favorite food?": getRandomResponse([
        "Hmm, as much as I'd love to munch on some bytes, I don't have taste buds. But I can certainly help you find delicious recipes!",
        "Being an AI, I don't have the ability to taste food. However, I can provide mouthwatering recipes if you're hungry!",
        "As an AI, I don't have personal food preferences. But I'm here to assist you in finding tasty dishes!",
        "My taste buds are limited to data, but I can help you find some scrumptious recipes!",
    ]),
};
function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}
