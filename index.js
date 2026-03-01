// CHAT
const socket = io("https://chat-server-3bcx.onrender.com");

// HANDLE MESSAGES
const sendBtn = document.getElementById('submit');
const input = document.getElementById('msg-input');
const messagesDiv = document.getElementById('messages');

// SEND
sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', msg); 
    input.value = '';
  }
});
//RECIEVE
socket.on('chat message', (msg) => {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = msg;
  msgDiv.style.padding = '5px';
  msgDiv.style.borderBottom = '1px solid #eee';
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// HANDLE EXIT (CROSS-ORIGIN)
const button = document.getElementById('exit-button');

button.addEventListener('click', () => {
  console.log("You clicked the exit button!");
  window.parent.postMessage("exit-button_clicked", "https://bitshift.neocities.org/");
});
