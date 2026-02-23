"use strict";

// Elements
const chatContainer = document.getElementById("chatContainer");
const sendBtn = document.getElementById("sendBtn");
const textBox = document.getElementById("textbox");

let user = { message: "", counter: 0 };
let httpRequest;

chatbotSendMessage("Please choose an option: ");
initializeOptions();

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

/* const questionsToAsk = [
  {
    question: "what's your name?",
    answer: "",
  },
  {
    question: "how old are you?",
    answer: "",
  },
  {
    question: "what's your job title?",
    answer: "",
  },
  {
    question: "how old are you?",
    answer: "",
  },
  {
    question: "where do you live?",
    answer: "",
  },
  {
    question: "what's your job title?",
    answer: "",
  },
  {
    question: "how old are you?",
    answer: "",
  },
  {
    question: "where do you live?",
    answer: "",
  },
]; */

/* askQuestion();

function askQuestion() {
  if (questionsToAsk.length > user.counter) {
    setTimeout(function () {
      chatbotSendMessage(questionsToAsk[user.counter].question);
      user.counter++;
    }, 1000);
    console.log(questionsToAsk[user.counter - 1]);
  }
} */

/* setTimeout(function () {
  chatbotSendMessage("Hi, what is your name?");
}, 500); */

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

  // Scroll to last message
  chatContainer.scrollTop = chatContainer.scrollHeight;
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

  // Scroll to last message
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function initializeOptions() {
  let options = [
    {
      number: 1,
      choice: "Weather",
    },
    {
      number: 2,
      choice: "Sports",
    },
    {
      number: 3,
      choice: "News",
    },
  ];

  const messageElement = document.createElement("div");
  messageElement.classList.add("w-50");
  messageElement.classList.add("float-left");
  messageElement.classList.add("shadow-sm");
  messageElement.style.margin = "10px";
  messageElement.style.padding = "5px";

  for (let i = 0; i < options.length; i++) {
    messageElement.innerHTML +=
      "<br>" +
      "<span style=" +
      "margin-top: 10px; padding: 10px" +
      ">" +
      options[i].number +
      " " +
      options[i].choice;
    ("</span>");
  }

  messageElement.animate(
    [{ easing: "ease-in", opacity: 0.4 }, { opacity: 1 }],
    { duration: 1000 },
  );

  chatContainer.appendChild(messageElement);

  chatContainer.appendChild(messageElement);
}

function handleWeatherResponse() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      alert("There was an unexpected error.");
    }
  }
}

function getWeatherRequest(lat, long) {
  httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = handleWeatherResponse;
  httpRequest.open("GET", "");
  httpRequest.send();
}

function getLocationAndWeather() {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      let lat = pos.coords.latitude;
      let long = pos.coords.longitude;

      getWeatherRequest(lat, long);
    },
    (err) => {
      console.log(err);
    },
  );
}

function assistantResponse(messageText) {
  let userChoice = parseInt(messageText.trim());

  switch (userChoice) {
    case 1:
      // get weather
      //alert("you choose weather");
      // get location then weather
      getLocationAndWeather();
      break;
    case 2:
      // get sports news
      alert("you choose sports");
      break;
    case 3:
      // get general news
      alert("you choose news");
      break;
    default:
      alert("default");
  }
}

sendBtn.addEventListener("click", function (e) {
  if (textBox.value == "") {
    alert("Please type in a message");
  } else {
    let messageText = textBox.value;
    user.message = messageText;
    sendMessage(messageText);
    textBox.value = "";

    //questionsToAsk[user.counter - 1].answer = user.message;

    //askQuestion();
    //processMessage();

    assistantResponse(messageText);
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
