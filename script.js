var buttons = document.querySelectorAll("#fury")
console.log(buttons)
buttons.forEach((value) => {
    value.addEventListener("click", () => {
        window.open("http://www.youtube.com", "", "width=200px;heigth=200")
    })
})
console.log(navigator)
var divs = document.querySelectorAll(".card")
divs.forEach((value) => {
    value.addEventListener("mouseover", (event) => {
        
        console.log(value.name)
    })
})
