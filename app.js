const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let randomPosition=square[Math.floor(Math.random() * 9)]

function randomSquare() {
  //no need to traverse all the squares
  randomPosition.classList.remove('mole')

  randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition){
      result = result + 1
      score.textContent = result
      hitPosition=null
    }
  })
})


function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveMole()


function countDown() {
  currentTime--
  timeLeft.textContent = currentTime

  if(currentTime === 0 ) {
    clearInterval(timerId)
    alert('GAME OVER! Your final score is' + result)
  }
}

let timerId = setInterval(countDown, 1000)
