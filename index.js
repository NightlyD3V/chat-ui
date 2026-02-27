// CHAT 
const socket = io("https://chat-server-3bcx.onrender.com");
socket.on("chat message", msg => {
  console.log("New message:", msg);
});

function sendMessage(msg) {
  socket.emit("chat message", msg);
}
