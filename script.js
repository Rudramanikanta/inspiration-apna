var buttons = document.querySelectorAll("#fury")
console.log(buttons)
buttons.forEach((value) => {
    value.addEventListener("click", (event) => {
        console.log(event.target.value)
        window.open(`https://www.youtube.com/results?search_query=${event.target.value}+trailer`, "", "width=200px;heigth=200")
    })
})
console.log(navigator)
var divs = document.querySelectorAll(".card")
divs.forEach((value) => {
    value.addEventListener("mouseover", (event) => {
        
        
    })
})
