var wsUri = "ws://" + document.location.host + document.location.pathname + "whiteboardendpoint";
var websocket = new WebSocket(wsUri);

websocket.onerror = function (evt) {
  onError(evt);
};

function onError(evt) {
  writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
}


websocket.onmessage = function (evt) {
  onMessage(evt);
};

function sendText(json) {
  console.log("sendText: # 4: " + json);
  websocket.send(json);
}

function onMessage(evt) {
  console.log("onMessage: # 5" + evt.data);
  drawImageText(evt.data);
}