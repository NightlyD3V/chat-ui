// CHAT
const socket = io("https://chat-server-3bcx.onrender.com");

// USER COUNT 
const onlineDisplay = document.getElementById('active-users');
socket.on("userCount", (count) => {
  onlineDisplay.textContent = `[${count}] runner(s)`;
});

// HANDLE MESSAGES
const sendBtn = document.getElementById('submit');
const form = document.getElementById('msg-form');
const input = document.getElementById('msg-input');
const messagesDiv = document.getElementById('messages');

// SEND
form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', msg);
    input.value = '';
  }
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault(); 
  const msg = input.value.trim();
  if (msg) {
    socket.emit('chat message', msg);
    input.value = '';
  }
});

// RECIEVE
socket.on('chat message', (msg) => {
  const msgDiv = document.createElement('div');
  msgDiv.textContent = msg;
  msgDiv.style.padding = '5px';
  msgDiv.style.borderBottom = '2px solid #eee';
  msgDiv.style.background = '#1E90FF';
  msgDiv.style.marginBottom = '10px';
  msgDiv.style.borderRadius = '10px 10px 10px 10px';
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// HANDLE EXIT (CROSS-ORIGIN)
const button = document.getElementById('exit-button');

button.addEventListener('click', () => {
  console.log("You clicked the exit button!");
  window.parent.postMessage("exit-button_clicked", "https://bitshift.neocities.org/");
});
