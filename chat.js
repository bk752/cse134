class Message {
	constructor(owner, message, part) {
		this.owner = owner;
        this.message = message;
        this.part = part;
	}
}

let messages = [
    new Message("user", "Hello I would like some help choosing parts."),
    new Message("expert", "Hello. What can I help you with?"),
    new Message("user", "I am not sure what kind of motherboard I should get."),
    new Message("user", "Do you have any recommendations?"),
    new Message("expert", "How does this motherboard look?", new Part("ATX Motherboard", "Great Motherboard for $150", "images/mb1.jpeg"))
];

let parts = [
	new Category("CPU").addPart([
		new Part("i5 Processor", "$197.89", "images/i5.jpeg"),
		new Part("i7 Processor", "$569.00", "images/i7.jpeg"),
	]),
	new Category("Motherboard").addPart([
		new Part("Micro ATX Motherboard", "$59.99", "images/mb1.jpeg"),
		new Part("ATX Motherboard", "$109.99", "images/mb2.jpeg"),
	]),
	new Category("GPU").addPart([
		new Part("NVIDIA GTX 1060", "$489.89", "images/gpu1.jpeg"),
		new Part("Radeon RX 570", "$636.99", "images/gpu3.jpeg"),
	]),
];

function addMessage(message) {
    let holder = document.createElement("div");
    holder.setAttribute("class", message.owner==="user" ? "chat__message-holder chat__message-holder--user" : "chat__message-holder");
    let msg = document.createElement("div");
    msg.setAttribute("class", "chat__message");
    msg.innerHTML = message.message;
    holder.appendChild(msg);
    chatLog.appendChild(holder);
    if (typeof(message.part) != "undefined") {
        let partEle = document.createElement("div");
        partEle.setAttribute("class", "part-card");
        
        let imageEle = document.createElement("img");
        imageEle.setAttribute("class", "part-card__image");
        imageEle.setAttribute("src", message.part.image);
        imageEle.setAttribute("alt", "placeholder");

        let title = document.createElement("div");
        title.setAttribute("class", "part-card__title");
        title.innerHTML = message.part.name;

        let info = document.createElement("div");
        info.setAttribute("class", "part-card__description");
        info.innerHTML = message.part.desc;

        let button = document.createElement("button");
        button.setAttribute("class", "part-card__add");
        button.innerHTML = "Add item to build";

        msg.appendChild(partEle);
        partEle.appendChild(imageEle);
        partEle.appendChild(title);
        partEle.appendChild(info);
        partEle.appendChild(button);
    }
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
function displayParts(cat_name) {
    for (j = 0; j < parts.length; j++) {
        let cat = parts[j];
        if (cat.name.toLowerCase() === cat_name) {
            let partsList = cat.parts;
            let holder = document.createElement("div");
            holder.setAttribute("class", "chat__message-holder chat__message-holder--user");
            holder.setAttribute("id", "partsMessageHolder");
            let msg = document.createElement("div");
            msg.setAttribute("class", "chat__message");
            holder.appendChild(msg);
            chatLog.appendChild(holder);
            for (i = 0; i < partsList.length; i++) {
                let part = partsList[i];
                let partEle = document.createElement("div");
                partEle.setAttribute("class", "part-card");
                
                let imageEle = document.createElement("img");
                imageEle.setAttribute("class", "part-card__image");
                imageEle.setAttribute("src", part.image);
                imageEle.setAttribute("alt", "placeholder");

                let title = document.createElement("div");
                title.setAttribute("class", "part-card__title");
                title.innerHTML = part.name;

                let info = document.createElement("div");
                info.setAttribute("class", "part-card__description");
                info.innerHTML = part.desc;

				let button = document.createElement("button");
				button.setAttribute("class", "part-card__add");
				button.innerHTML = "Add part";

                partEle.appendChild(imageEle);
                partEle.appendChild(title);
                partEle.appendChild(info);
				partEle.appendChild(button);
                msg.appendChild(partEle);
            }
            let button = document.createElement("button");
            button.setAttribute("class", "part-card__add");
            button.onclick = () => {
				chatLog.removeChild(holder);
			};

            button.innerHTML = "Close";
            msg.appendChild(button);
        }
    }
    chatLog.scrollTop = chatLog.scrollHeight;
}

function partsOnClick() {
    let text = messageBox.value.toLowerCase();
    if (text==="") {
        return;
    }
    messageBox.value = "";
    displayParts(text);
}
function keyPress(e) {
    let key = e.keyCode;

    // If the user has pressed enter
    if (key === 13) {
        if (e.shiftKey) {
            partsOnClick();
        }
        else {
            sendMessage();
        }
        e.preventDefault();
    }
}
