const botaoTopo = document.querySelector(".botao__topo")
const listaCards = document.querySelectorAll(".escolhasEvida__cartao--dinamico")
const setaExpandir = document.querySelector(".seta__cards")

function restaurarVisibilidadeBotao(){
    if(document.documentElement.scrollTop <= 800){
        botaoTopo.style.display = "none"
    }else{
        botaoTopo.style.display = "block"
        botaoTopo.classList.toggle("esconder")
    }
}

for (let i = 0; i < listaCards.length; i++){
    listaCards[i].classList.remove("flexDinamico")
    listaCards[i].classList.add("noneDinamico")
}

botaoTopo.addEventListener("click", (event) => {
    event.preventDefault()
    window.scroll({top: 0, behavior: "smooth"})
})

document.addEventListener("scroll", (e) => {
    restaurarVisibilidadeBotao()
})

setaExpandir.addEventListener("click", () => {
    for (let i = 0; i < listaCards.length; i++){
        listaCards[i].classList.toggle("flexDinamico")
        listaCards[i].classList.toggle("noneDinamico")
    }
    
    setaExpandir.classList.toggle("seta__expandir")
    setaExpandir.classList.toggle("seta__reduzir")
})

console.log(listaCards)
