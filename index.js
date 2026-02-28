// CHAT
let messages = [];

const socket = io("https://chat-server-3bcx.onrender.com");
socket.on("chat message", msg => {
  console.log("New message:", msg);
});

function sendMessage(msg) {
  socket.emit("chat message", msg);
}

// HANDLE EXIT (CROSS-ORIGIN)
const button = document.getElementById("exit-button");

button.addEventListener("click", () => {
  console.log("You clicked the exit button!");
  window.parent.postMessage("buttonClicked", "*");
});
