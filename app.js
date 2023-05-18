
const body = document.querySelector("body")
const input =   document.querySelector("#isChecked")
const circle =   document.querySelector(".circle")
const navBar =   document.querySelector(".nav-bar")
const home =   document.querySelector(".home")
const title =   document.querySelector(".title")

input.checked = JSON.parse(localStorage.getItem("dar"))

input.addEventListener("input", function(){
    myApp()
})

function iisChecked(){
    localStorage.setItem("dar", JSON.stringify(input.checked))
}

function myApp(){
    if(input.checked){
        body.style.background = "black"
        navBar.style.background = "rgb(40, 38, 38)"
        home.style.color = " rgb(210, 205, 205)"
        title.style.color = " rgb(210, 205, 205)"
        title.textContent = "Switch To Lite Mode"
        iisChecked()
    }else{
        body.style.background = "rgb(174, 174, 153)"
        navBar.style.background = "white"
        home.style.color = "black"
        title.style.color = "black"
        title.textContent = "Switch To Dark Mode"
        iisChecked()
    }
}

myApp()

