//Create an array where the message along with its ID will be stored.
let message = []

const list = document.querySelector('.messages')

let ls = JSON.parse(localStorage.getItem('message'))
if (ls != null)
    message = ls
console.log(message)

for (let i = 0; i < message.length; i++){
    list.insertAdjacentHTML('beforeend',`<p class="message-item">${message[i]}</p>`)
}

// This function will enable us to add the message to the DOM
function addMessage(text){
    if (message.length > 10)
    {
        message = []
        list.innerHTML = ""
    }

    message.push(text)
    console.log(message)
    localStorage.setItem('message', JSON.stringify(message))

    //Render message to the screen
    list.insertAdjacentHTML('beforeend',`<p class="message-item">${text}</p>`)
}

//Create event listener to detect when a message has been submitted
const form = document.querySelector('.message-form')
form.addEventListener('submit', event => {
    event.preventDefault()

    //input to save the message itself
    const input = document.querySelector('.typedMessage')

    //This helps us to detect empty messages and ignore them
    const text = input.value.trim()

    if(text !==''){
        addMessage(text)
        input.value = ''
        input.focus()
    }
})
