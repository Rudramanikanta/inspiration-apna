
var buttons = document.querySelectorAll("#fury")
console.log(buttons)
buttons.forEach((value) => {
    value.addEventListener("click", (event) => {

        window.open(`https://www.youtube.com/results?search_query=${event.target.value}+trailer`, "", "width=200px;heigth=200")
    })
})
console.log(navigator)
var divs = document.querySelectorAll(".card")
divs.forEach((value) => {
    value.addEventListener("mouseover", (event) => {


    })
})
setTimeout(() => {
    document.getElementById("spinner2").style.display = "none"
}, 500)

var search = document.getElementById("search")
var cards = document.querySelectorAll(".card")
search.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {

      cards.forEach((value)=>{
       if(value.attributes.name.nodeValue===search.value){
            display(value)
       }
      })
      
    }
})
function display(data){
    document.getElementById("body").innerHTML=""
    document.getElementById("body").appendChild(data)
}
