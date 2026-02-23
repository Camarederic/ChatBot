"use strict";

// Elements
const chatContainer = document.getElementById("chatContainer");
const sendBtn = document.getElementById("sendBtn");
const textBox = document.getElementById("textbox");

let user = { message: "" };

const arrayOfPossibleMessages = [
  { message: "how are you?", response: "I'm great" },
  { message: "hi", response: "hi!" },
  { message: "who are you?", response: "I'm your assistant" },
  { message: "what's your name?", response: "I'm a chatbot" },
  { message: "what is your name?", response: "I'm a chatbot" },
  { message: "how old are you?", response: "I'm ageless" },
  { message: "do you have kids?", response: "No I don't" },

  { message: "do you sleep early?", response: "No I don't" },
  { message: "do you have a car?", response: "I travel th, rough space :)" },
  { message: "can you dance?", response: "yes, tango" },
];

setTimeout(function () {
  chatbotSendMessage("Hi, what is your name?");
}, 500);

function chatbotSendMessage(messageText) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-left");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML =
    "<span>Chatbot: </span>" +
    "<span style=" +
    "margin-top: 10px; padding: 10px" +
    ">" +
    messageText +
    "</span>";

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 },
  );

  chatContainer.appendChild(messageElement);

  chatContainer.appendChild(messageElement);
}

function sendMessage(messageText) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-right");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  messageElement.innerHTML =
    "<span>You: </span>" +
    "<span style=" +
    "margin-top: 10px; padding: 10px" +
    ">" +
    messageText +
    "</span>";

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 },
  );

  chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener("click", function (e) {
  if (textBox.value == "") {
    alert("Please type in a message");
  } else {
    let messageText = textBox.value;
    user.message = messageText;
    sendMessage(messageText);
    textBox.value = "";

    processMessage();
  }
});

function processMessage() {
  if (user.message.length > 5) {
    // Array of results
    const result = arrayOfPossibleMessages.filter((val) =>
      val.message.includes(user.message.toLowerCase()),
    );

    if (result.length > 0) {
      const response = result[0].response;

      setTimeout(function () {
        chatbotSendMessage(response);
      }, 1000);
    } else {
      setTimeout(function () {
        chatbotSendMessage("I don't understand");
      }, 1000);
    }
  } else if (user.message == "how" || user.message == "who") {
    setTimeout(function () {
      chatbotSendMessage("?");
    }, 1000);
  } else {
    setTimeout(function () {
      chatbotSendMessage("Please send me a complete sentence");
    }, 1000);
  }
}
