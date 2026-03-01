// CHAT
const socket = io("https://chat-server-3bcx.onrender.com");

// HANDLE MESSAGES
let messages = [];
const sendBtn = document.getElementById('submit');
// SEND
sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', msg); 
    input.value = '';
  }
});
//RECIEVE
const messagesDiv = document.getElementById('messages');
socket.on('chat message', (msg) => {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = msg;
  msgDiv.style.padding = '5px';
  msgDiv.style.borderBottom = '1px solid #eee';
  messagesDiv.appendChild(msgDiv);
  chatPopup.scrollTop = chatPopup.scrollHeight;
});

// HANDLE EXIT (CROSS-ORIGIN)
const button = document.getElementById('exit-button');

button.addEventListener('click', () => {
  console.log("You clicked the exit button!");
  window.parent.postMessage("exit-button_clicked", "https://bitshift.neocities.org/");
});
