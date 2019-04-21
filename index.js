// experimental live-coding AudioTrimmer.com on client side.

// visual part ( clear distractive DOM element).
let header = document.getElementsByClassName("container")
let slide = document.getElementsByClassName("ui-slider-handle")
let listSocial = document.getElementById("navbar").querySelectorAll("div>a");
for (list of listSocial) { list.remove() }
for (item of slide) { item.remove() }
// header[0].style.opacity = 0
// navbar[0].style.opacity = 0
// document.body.style.paddingTop = 0

// get elements.
let btn = document.getElementsByClassName("con-playpause")
let start = document.getElementById('begin')
let end = document.getElementById("end")



const getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startFactor = 16
var rand
var randClock = getRandomInt(20, 200)
var randClockNarrow = getRandomInt(20, 50)
var baseClock = 200
var baseClockNarrow = 100
var endPos, startPos

endPos = setInterval( function(){
  rand = Math.random() + startFactor
  end.value = rand
}, baseClockNarrow + randClock)

startPos = setInterval( function(){
    startFactor = getRandomInt(0, 20)
    start.value = startFactor
}, baseClock + randClock)


// relative end position.
// end.value = parseFloat(start.value) + 0.02

const hold = function(){
    clearTimeout(endPos)
    clearTimeout(startPos)
}

const resume = function(){
    endPos = setInterval( function(){
        rand = Math.random() + startFactor
        end.value = rand
    }, baseClockNarrow + randClock)
      
    timerStart = setInterval( function(){
          startFactor = getRandomInt(startFactor ,50 )
          start.value = startFactor
    }, baseClock + randClock)

    startPos = setInterval(function () {
        startFactor = getRandomInt(0, 20)
        start.value = startFactor
    }, baseClock + randClock)
}

const stop = function(){
    hold()
    btn[0].click()
}


// controls.
btn[0].click()