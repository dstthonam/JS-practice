// vanilla js 구현

let container = document.querySelector(".container")
let btn01 = document.querySelector(".btn01")
let btn02 = document.querySelector(".btn02")
let btn03 = document.querySelector(".btn03")


btn01.addEventListener('click', function() {
    container.style.transform = 'translate(0vw)';
})
btn02.addEventListener('click', function() {
    container.style.transform = 'translate(-100vw)';
})
btn03.addEventListener('click', function() {
    container.style.transform = 'translate(-200vw)';
})


// jquery 구현

