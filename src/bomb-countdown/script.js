let start = document.querySelector('.start')
let time = document.querySelector('.timer')
let sec = 9
start.addEventListener('click', main)

function main() {
    start.removeEventListener('click', main)
    let promise = new Promise((resolve) => {
        let timer = setInterval(() => {
            time.innerText = '00:0' + sec
            sec--
            if (sec < 0) {
                sec = 0
                time.innerText = '00:0' + sec
                clearInterval(timer)
                resolve(1)
            }
        }, 1000)

    })
    promise.then(() => {
        alert('BOOM!')
        time.innerText = '00:10'
        sec = 9
        start.addEventListener('click', main)
    })
}