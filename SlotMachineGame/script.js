let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let btnspin = document.getElementById('btnspin')
let btnstop = document.getElementById('btnstop')

let slot = document.getElementsByClassName('value') ;

let values = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
}

btnspin.onclick = function () {
    // document.documentElement => this is ":root" of css
    document.documentElement.style.setProperty('--speed', 5)
    updateAnimation(5)
}

btnstop.onclick = function() {
    temp_func().then(checkwin(value1.innerText,value2.innerText,value3.innerText)) ;
}

function temp_func() {
    return  new Promise((resolve , reject)=>{
        document.documentElement.style.setProperty('--speed', undefined )
        clearInterval(animationId)
        /*checkwin(value1.innerText,value2.innerText,value3.innerText) ;*/
        /*setTimeout( checkwin(value1.innerText,value2.innerText,value3.innerText), 1000) ;*/
        let computedStyle = window.getComputedStyle(slot)
        let anmcount = computedStyle.getPropertyValue('animation-iteration-count');
        slot.style.anmcount = 0;
        resolve()
        })
}

function checkwin(value1,value2,value3) {
    if(value1==value2 && value2==value3) {
        setTimeout(alert("You Win !!🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑🤑"),200)
    }
    else {
        setTimeout(alert("Better luck next time.👍👍"),200)
    }
}
