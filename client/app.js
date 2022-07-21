const socket = io("http://localhost:5000")

const sendButton = document.querySelector("button")
const input = document.querySelector("input")
const messages = document.querySelector("ul")


sendButton.addEventListener("click" , () => {
    socket.emit("receiveMessage" , input.value)
})

socket.on("sendMessage" , message => {
    const text = document.createElement("li")
    text.innerText = message 
    messages.appendChild(text)
})