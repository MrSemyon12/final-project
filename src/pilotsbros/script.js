const start = document.querySelector('.start')
const buttons = document.querySelectorAll('.cell')
const turnsTable = document.querySelector('.turns')
let turns = 0
let defPos = ["22", "24", "31", "41"]

start.addEventListener('click', main)
main()

function checkWin(){
    let win = true
    buttons.forEach(button => {
        if(button.style.background === "orange"){
            win = false
        }
    })
    if (win){
        buttons.forEach(button => {
            button.removeEventListener('click', draw)
        })
        turnsTable.innerText = "You won in " + turns.toString() + " turns!"
    }
}

function draw(evt){
    turns++
    turnsTable.innerText = "Turn: " + turns.toString()
    let row = evt.currentTarget.id[0]
    let column = evt.currentTarget.id[1]
    console.log(row.toString() + " " + column.toString())
    buttons.forEach(button => {
        if (button.id[0] === row || button.id[1] === column){
            if (button.style.background === "peru") {
                button.style.background = "orange"
            } else{
                button.style.background = "peru"
            }
        }
    })
    checkWin()
}

function main() {
    buttons.forEach(button => {
        button.addEventListener('click', draw)
        if (defPos.includes(button.id)){
            button.style.background = "orange"
        }else{
            button.style.background = "peru"
        }
    })
    turnsTable.innerText = "Turn: 0"
    start.innerText = "Restart"
    turns = 0
}

