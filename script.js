const gameArena = document.querySelector(".gameArena");
const status = document.querySelector(".status");
const restart = document.querySelector(".restart")






let cells = ["", "", "", "", "", "", "", "", "",];

let go = "circle"
status.textContent = "Circle goes first"

function createSquares() {
    cells.forEach((item, index) => {
        const newElement = document.createElement('div');
        newElement.classList.add('squares');
        newElement.id = index
        newElement.addEventListener('click', nextStep)
        gameArena.append(newElement)


    })
}
const newElement = document.createElement('div');


createSquares()

function nextStep(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    status.textContent = "it is now " + go + "`s go.";
    e.target.removeEventListener("click", nextStep);
    checkWinner()

   
  
}

function checkWinner() {
    const allSquares = document.querySelectorAll(".squares")
    const winningCells = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7,], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ]
  winningCells.forEach(array => {
    const circleWins = array?.every(cell => 
        allSquares[cell].firstChild?.classList.contains('circle'))

        if(circleWins) {
            status.textContent = "Circle Wins!"
            allSquares.forEach(square => square.removeEventListener("click", nextStep))
            return
        }
  })

  winningCells.forEach(array => {
    const crossWins = array?.every(cell => 
        allSquares[cell].firstChild?.classList.contains('cross'))

        if(crossWins) {
            status.textContent = "Cross Wins!"
            allSquares.forEach(square => square.removeEventListener("click", nextStep))
            return
        }

        
       
  })


    
}

const allSquares = document.querySelectorAll(".squares")
const circle = document.querySelectorAll(".circle")
const cross = document.querySelectorAll(".cross")




restart.addEventListener("click", restartGame)

function restartGame() {
    cells = ["", "", "", "", "", "", "", "", "",];
    allSquares.forEach(cell => cell.textContent = "")
    status.textContent = "Circle goes first"
    allSquares.forEach(square => square.addEventListener("click", nextStep))


 
}



restartGame()




