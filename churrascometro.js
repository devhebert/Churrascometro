//Modelo de negócio//
/*  Carne = 400gr por pessoa, se for mais que 6hrs = 650gr
    Cerveja = 1200ml por pessoa, se for mais que 6hrs = 2000ml
    Refrigerante/água = 1000ml por pessoa, se for mais que 6hrs = 1500ml

    crianças valem por 0,5
 */

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando")

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    let qtdTotalCerveja = cervejaPP(duracao) * adultos
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas)

    resultado.innerHTML = `<p>${qtdTotalCarne/1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas/2000)} Pet(s) 2Litros de Refri ou Água</p>`
}

function carnePP(duracao) {
    if(duracao >= 6) {
       return 950;
    } else{
        return 700;
    }
}

function cervejaPP(duracao) {
    if(duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao) {
    if(duracao >= 6) {
        return 1500;
    } else{
        return 1000;
    }
}
