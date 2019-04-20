// experimental live-coding AudioTrimmer.com on client side.

// visual part ( clear distractive DOM element).
let header = document.getElementsByClassName("container")
let navbar = document.getElementsByClassName("navbar")
header[0].style.opacity = 0
navbar[0].style.opacity = 0
document.body.style.paddingTop = 0

// get elements.
let btn = document.getElementsByClassName("con-playpause")
let start = document.getElementById('begin')
let end = document.getElementById("end")

// controls.
btn[0].click()

const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startPos = 16
var rand
var randClock = getRandomInt(20, 200)
var randClockNarrow = getRandomInt(20, 50)
var baseClock = 200
var baseClockNarrow = 100
var timer, timerPos

timer = setInterval( function(){
  rand = Math.random() + startPos
  end.value = rand
}, baseClockNarrow + randClock)

timerPos = setInterval( function(){
    startPos = getRandomInt(39, 50)
    start.value = startPos
}, baseClock + randClock)


// relative end position.
end.value = parseFloat(start.value) + 0.02

const hold = function(){
    clearTimeout(timer)
    clearTimeout(timerPos)
}

const resume = function(){
    timer = setInterval( function(){
        rand = Math.random() + startPos
        end.value = rand
      }, baseClockNarrow + randClock)
      
      timerPos = setInterval( function(){
          startPos = getRandomInt(39, 50)
          start.value = startPos
      }, baseClock + randClock)
}

const stop = function(){
    hold()
    btn[0].click()
}