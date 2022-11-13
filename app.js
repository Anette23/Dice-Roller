// VARIABLES
let totalScore;
let currentScore;
let activePlayer;
let dice 
let playGame


// ANIMATION
document.documentElement.style.setProperty('--animate-duration', '2s');


// START FUNCTION
const start = () => {
    totalScore = [0,0]
    currentScore = 0
    activePlayer = 0
    playGame = true

    document.querySelector('#name-0').textContent = 'Score  Player 1'
    document.querySelector('#totalScorePlayer-0').textContent = 0
    document.querySelector('#name-1').textContent = 'Score Player 2'
    document.querySelector('#totalScorePlayer-1').textContent = 0


    document.querySelector('#currentScore-0').textContent = 0
    document.querySelector('#currentScore-1').textContent = 0


    document.querySelector('.diceImage').style.display = 'none'

    document.querySelector('.totalScore0').classList.add('active')
    document.querySelector('.totalScore1').classList.remove('active')
}

start()


// MODAL
const openModalBtn = document.getElementById('open-modal')
const modalWindowOverlay = document.getElementById('modal-overlay')

const showModalWindow = () => {
    modalWindowOverlay.style.display = 'flex'
}

openModalBtn.addEventListener('click', showModalWindow)


const closeModalBtn = document.getElementById('close-modal')

const hideModalWindow = () => {
    modalWindowOverlay.style.display = 'none'
}

closeModalBtn.addEventListener('click', hideModalWindow)

// const hideModalWindowOnBlur = (e) => {
//     if(e.target = e.currentTarget) {
//         hideModalWindow()
//     }
// }
// modalWindowOverlay.addEventListener('click', hideModalWindowOnBlur)


// ROLL DICE 
let rollDiceBtn = document.querySelector('.btn-rollDice')
rollDiceBtn.addEventListener('click', () => {
    if(playGame) {
        let dice = Math.ceil(Math.random() * 6)
        document.querySelector('.diceImage').style.display = 'block'
        let diceImage = document.querySelector('.diceImage')
        console.log(diceImage.src = 'img/' + dice + '.jpg')
        document.querySelector('.dice').classList.add('animate__animated', 'animate__rotateIn')

        if(dice === 1) {
            nextPlayer()
        } else {
            currentScore += dice
            document.querySelector('#currentScore-' + activePlayer).textContent = currentScore
        }
    }
})

    
// NEXT PLAYER FUNCTION
const nextPlayer = () => {
    if(activePlayer === 0) {
        activePlayer = 1
    } else  {
        activePlayer = 0
    }

    currentScore = 0
    document.querySelector('#currentScore-0').textContent = 0
    document.querySelector('#currentScore-1').textContent = 0

    document.querySelector('.totalScore0').classList.toggle('active')
    document.querySelector('.totalScore1').classList.toggle('active')
   }


// HOLD SCORE
const holdScore = document.querySelector('.btn-holdScore')
holdScore.addEventListener('click', () => {
    if(playGame){
        totalScore[activePlayer] = totalScore[activePlayer] + currentScore
        document.querySelector('#totalScorePlayer-' + activePlayer).textContent = totalScore[activePlayer]
    
    
        if(totalScore[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'You Won!! 🥇🥂'
            document.querySelector('#name-' + activePlayer).classList.add('animate__animated', 'animate__heartBeat')
            document.querySelector('#currentScore-' + activePlayer).textContent = 0
            document.querySelector('#name-' + activePlayer).style.padding = '1.5rem'
            playGame = false
        } else {
            nextPlayer()
         }
    }
   })


// NEW GAME FUNCTION
const newGameBtn = document.querySelector('.btn-newGame')
newGameBtn.addEventListener('click', () => {
start()
location.reload()
})


