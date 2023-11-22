var colors = ["#EDDD00","#BABAB6","blue","#2FED00","#ED000C","green","#8D50C7","pink","#5850C7","#50C783","#50C7C7","#BD50C7","#C75081"];
var colorName = document.querySelector("span")
var colorTag = document.querySelector('h1')
var items = document.querySelectorAll('div')

function colorHandler() {
    var randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNum]
    colorName.textContent = colors[randomNum]
}
colorHandler();