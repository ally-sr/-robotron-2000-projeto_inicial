// Teste Inicial - JS

// const robotron= document.querySelector('#robotron');
// robotron.addEventListener("click", () => {
//     console.log("cliquei no robô!")
// })

// function dizOi (nome) {
//     console.log("Oi", nome+"!")
//     console.log("Bem-vindo ao Robotron 2000")
// }

// dizOi("Ally")

const subtrair = document.querySelector('#subtrair');
const somar = document.querySelector('#somar');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})



function manipulaDados(operacao,controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === "-"){
        if(parseInt(peca.value) > 0){
            peca.value = parseInt(peca.value) - 1 
        }
    } else {
        if(parseInt(peca.value) < 4){
            peca.value = parseInt(peca.value) + 1 
        }
    }
}

function atualizaEstatisticas(peca){
    
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })

}

