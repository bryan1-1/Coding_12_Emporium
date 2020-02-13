var switchBlack = document.querySelector(".black")
var switchWhite = document.querySelector(".white")
var webTitle = document.querySelector(".title")

switchBlack.addEventListener("click",()=>{
    document.body.style.backgroundColor = "black"
    webTitle.style.color ="white"   
})

switchWhite.addEventListener("click",()=>{
    document.body.style.backgroundColor = "white"
    webTitle.style.color ="black"
})

var connect = document.querySelector(".connect")
connect.addEventListener("click",()=>{
    
})
