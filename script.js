var hamburger = document.querySelector(".hamburger")

hamburger.addEventListener("click", clickHamburger)
/*
function clickHamburger(){
    var sidebar = document.querySelector(".sidebar")

    if (sidebar.style. == -2rem){
        sidebar.style.visibility = 'visible'
    }
    else{
        sidebar.style.visibility = 'hidden'
    }
    
}*/

function clickHamburger(){
    document.querySelector(".container").classList.toggle("show-menu")
   
}