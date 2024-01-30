const MessageContainer = document.getElementById("MessageContainer");

const Toggle = document.getElementById("Toggle");

const Menu = document.getElementById("Menu");
const Send = document.getElementById("Send");
const Recieve = document.getElementById("Recieve");
const Text = document.getElementById("Text");
const Clear = document.getElementById("Clear");

const SentMessage = document.getElementById("SentMessage");
const RecievedMessage = document.getElementById("RecievedMessage");

const MessageButtonText = document.getElementById("MessageButtonText");

on = false

Toggle.onclick = function(){
  if (on){
    on = false
    Menu.style.display = "none";
    MessageButtonText.innerHTML = "Message";
    
  }else{
    on = true
    Menu.style.display = "inline";
    MessageButtonText.innerHTML = "Close";
  }
}

Send.onclick = function(){
  if (Text.value != "" & Text.value != "Type message here"){
    var Clone = SentMessage.cloneNode(true);
    Clone.innerHTML = Text.value;
    Clone.style.display = "inline";
    MessageContainer.append(Clone)
    Text.value = "";
  }
}

Recieve.onclick = function(){
  if (Text.value != "" & Text.value != "Type message here"){
    var Clone = RecievedMessage.cloneNode(true);
    Clone.innerHTML = Text.value;
    Clone.style.display = "inline";

    MessageContainer.append(Clone)
    Text.value = "";
  }
}

Clear.onclick = function(){
  while (MessageContainer.firstChild){
    MessageContainer.removeChild(MessageContainer.firstChild)
  }
}
