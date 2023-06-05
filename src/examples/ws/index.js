const ws = new WebSocket('ws://localhost:4000/chat');

ws.onopen = () => {
  console.log('Connection with server was established')
  ws.send('New client connected');
};

ws.onclose = () => {
  console.log('Connection with server was closed')
};

ws.onmessage = (event) => {
  console.log('received: %s', event.data);
};

ws.onerror = (error) => {
  console.log('Error', error);
};