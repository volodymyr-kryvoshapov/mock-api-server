const WebSocket = require('ws');
const { WebSocketServer } = require('ws');
const { parse } = require('url');
const { WS_CHAT_ROUTE } = require('../../config.js');

const wss = new WebSocketServer({ noServer: true });

wss.on('connection', chat)

module.exports.upgradeChatWs = (request, socket, head) => {
  const { pathname } = parse(request.url);

  if (pathname === WS_CHAT_ROUTE) {
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
}

function chat(ws) {
  console.log("New client connected");

  ws.on('message', function message(data, isBinary) {
    console.log(`Client has sent us: ${data}`)

    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });

  ws.on("close", () => {
    console.log("The client has disconnected");
  });

  ws.onerror = function () {
    console.log("Some Error occurred")
  }
}
