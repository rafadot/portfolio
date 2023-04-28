var btnHome = document.getElementById("home")
var btnProjetos = document.getElementById("projetos")
var btnContato = document.getElementById("contato")

btnHome.addEventListener("click",function(){
    btnClear()
    btnHome.classList.add("btn-click")
})

btnProjetos.addEventListener("click",function(){
    btnClear()
    btnProjetos.classList.add("btn-click")
})

btnContato.addEventListener("click",function(){
    btnClear()
    btnContato.classList.add("btn-click")
})

function btnClear(){
    btnHome.classList.remove("btn-click")
    btnProjetos.classList.remove("btn-click")
    btnContato.classList.remove("btn-click")
}