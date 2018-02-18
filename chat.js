class Message {
	constructor(owner, message) {
		this.owner = owner;
		this.message = message;
	}
}

let messages = [
    new Message("user", "Hello I would like some help choosing parts."),
    new Message("expert", "Hello. What can I help you with?"),
    new Message("user", "I am not sure what kind of motherboard I should get."),
    new Message("user", "Do you have any recommendations?")
];

function addMessage(message) {
    let holder = document.createElement("div");
    holder.setAttribute("class", message.owner==="user" ? "chat__message-holder chat__message-holder--user" : "chat__message-holder");
    let msg = document.createElement("div");
    msg.setAttribute("class", "chat__message");
    msg.innerHTML = message.message;
    holder.appendChild(msg);
    chatLog.appendChild(holder);
}
let chatLog = document.getElementById("chatLog");
let messageBox = document.getElementById("chatTextbox");
messages.forEach((message, index)=> {
    addMessage(message);
})

function sendOnClick() {
    sendMessage();
}
function sendMessage() {
    let text = messageBox.value;
    if (text==="") {
        return;
    }
    let msg = new Message("user", text);
    addMessage(msg);
    messageBox.value = "";

    chatLog.scrollTop = chatLog.scrollHeight;

}

function keyPress() {
    var key = window.event.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        sendMessage();
    }
}