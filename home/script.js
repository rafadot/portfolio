//interfaces
var contentHome = document.getElementById("content-home")

//buttons
var btnProjetcts = document.getElementById("projetos");
var btnHome = document.getElementById("home");
var btnContact = document.getElementById("contato");

btnProjetcts.addEventListener("click",function(){
    contentHome.setAttribute("hidden",true)
})

btnHome.addEventListener("click",function(){
    contentHome.removeAttribute("hidden")
})

btnContact.addEventListener("click",function(){
    contentHome.setAttribute("hidden",true)
})