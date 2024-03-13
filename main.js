const squares=document.querySelectorAll('.square')
const mole=document.querySelector('.mole')
const timeleft=document.querySelector('#time-left')
const score=document.querySelector('#score')


let result=0
let hitPositions
let currentTime=60
let timerId=null;
function randomSquare()
{
    squares.forEach(square=>
        {
            square.classList.remove('mole')
        })
        let randomSquare=squares[Math.floor(Math.random()*9)]
        console.log(randomSquare)
        randomSquare.classList.add('mole')
        hitPositions=randomSquare.id
}
randomSquare()
squares.forEach(square=>{
    square.addEventListener('mousedown',()=>{
        if(square.id==hitPositions)
        {{
            result++
            score.textContent=result
            hitPositions=null
        }}

    })

})
function moveMole()
{
    
    timerId=setInterval(randomSquare,500)
}
moveMole() 
function countDown()
{
currentTime--
timeleft.textContent=currentTime
if(currentTime==0)
{
    clearInterval(countDownTimerId)
    clearInterval(timerId)
    alert('Game over !! your final result is '+result)
}
}
let countDownTimerId=setInterval(countDown,1000)