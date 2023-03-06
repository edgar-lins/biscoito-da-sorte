const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const fortuneCookie = document.getElementById("fortune-cookie")
const fortuneMessage = document.getElementById("fortune-message")

const newCookie = document.getElementById("new-cookie")

const messages = [
  "teste 1",
  "teste 2",
  "teste 3",
  "teste 4",
]

function showPhrase() {
  const sizeMessage = messages.length
  const randomNumber = Math.floor(Math.random() * sizeMessage)

  fortuneMessage.innerHTML = messages[randomNumber]
}

function toggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

document.addEventListener("keypress", (e) => {
  if(e.key == 'Enter') {
    toggle()
    showPhrase()
  }
})

fortuneCookie.addEventListener('click', () => {
  toggle()
  showPhrase()
})

newCookie.addEventListener('click', () => {
  toggle()
  showPhrase()
})