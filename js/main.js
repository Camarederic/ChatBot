"use strict";

// Elements
const chatContainer = document.getElementById("chatContainer");
const sendBtn = document.getElementById("sendBtn");
const textBox = document.getElementById("textbox");

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

  chatContainer.appendChild(messageElement);
}

sendBtn.addEventListener("click", function (e) {
  let messageText = textBox.value;
  sendMessage(messageText);
});
