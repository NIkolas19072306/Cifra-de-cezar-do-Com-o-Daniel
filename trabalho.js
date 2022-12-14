var tela = document.querySelector('canvas'); // Váriavel que seleciona a tela.
var pincel = tela.getContext('2d'); // Váriavel usada para pintar na tela.
var botao1 = document.querySelector("#botao1")
var saidah31 = document.querySelector("#h31")  // Saida do texto cryptografado
var texto1 = document.querySelector("#texto1"); //Entrada do texto para cryptografar
var botao2 = document.querySelector("#botao2")
var saidah32 = document.querySelector("#h32")  // Saida do texto cryptografado
var texto2 = document.querySelector("#texto2"); //Entrada do texto para cryptografar


// Váriavel que define a posição do objeto.
var x = 12.5
var y = 37.5


// códigos do teclado
var esquerda = 37
var cima = 38
var direita = 39
var baixo = 40

// Quantidade de pixel que o objeto se movimenta.
var taxa = 25

//Variaveis para Cryptografia
var cryptogTam
var cryptog2
var cryptog
var alfabeto
var alfabetoTam



// função que cria o objeto.

function desenhaCirculo(x, y, raio) {

    pincel.fillStyle = 'black'
    pincel.beginPath()
    pincel.arc(x, y, raio, 0, 2 * Math.PI)
    pincel.fill()
}

function letra1() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("1", 5, 22.5, 15)
}

function letra2() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("2", 30, 22.5, 15)
}
function letra3() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("3", 55, 22.5, 15)
}
function letra4() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("4", 80, 22.5, 15)
}
function letra5() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("5", 105, 22.5, 15)
}
function letra6() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("6", 130, 22.5, 15)
}
function letra7() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("7", 155, 22.5, 15)
}
function letra8() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("8", 180, 22.5, 15)
}
function letra9() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("9", 205, 22.5, 15)
}
function letra10() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("10", 225, 22.5, 25)
}
function letra11() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("11", 250, 22.5, 25)
}
function letra12() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("12", 275, 22.5, 25)
}
function letra13() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("13", 300, 22.5, 25)
}
function letra14() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("14", 325, 22.5, 25)
}
function letra15() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("15", 350, 22.5, 25)
}
function letra16() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("16", 375, 22.5, 25)
}
function letra17() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("17", 400, 22.5, 25)
}
function letra18() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("18", 425, 22.5, 25)
}
function letra19() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("19", 450, 22.5, 25)
}
function letra20() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("20", 475, 22.5, 25)
}
function letra21() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("21", 500, 22.5, 25)
}
function letra22() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("22", 525, 22.5, 25)
}
function letra23() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("23", 550, 22.5, 25)
}
function letra24() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("24", 575, 22.5, 25)
}
function letra25() {
    pincel.font = '32px serif'
    pincel.fillStyle = "black"
    pincel.fillText("25", 600, 22.5, 25)
}


// função que desenha o grid.
function limpaTela() {
    var descer = 0
    while (descer <= 50) {
        for (var imp = 0; imp <= 625; imp = imp + 25) {
            pincel.fillStyle = "bisque"
            pincel.strokeStyle = "black"
            pincel.beginPath()
            pincel.rect(imp, descer, 25, 25)
            pincel.closePath()
            pincel.fill()
            pincel.stroke()
        }
        descer = descer + 25
    }
}

// função para atualizar a tela, desenhando o grid e o objeto.
function atualizaTela() {
    limpaTela();
    letra1()
    letra2()
    letra3()
    letra4()
    letra5()
    letra6()
    letra7()
    letra8()
    letra9()
    letra10()
    letra11()
    letra12()
    letra13()
    letra14()
    letra15()
    letra16()
    letra17()
    letra18()
    letra19()
    letra20()
    letra21()
    letra22()
    letra23()
    letra24()
    letra25()
    desenhaCirculo(x, y, 10)

}

// função para chamar o "atualizaTela" em um intervalo de tempo dado como segundo parâmetro.
setInterval(atualizaTela, 20)

// função que determina pra onde o objeto irá se movimentar.
function leDoTeclado(evento) {

    if (evento.keyCode == cima && y - taxa > 50) {
        y = y - taxa;

    } else if (evento.keyCode == baixo && y + taxa < 50) {
        y = y + taxa

    } else if (evento.keyCode == esquerda && x - taxa > 0) {
        x = x - taxa

    } else if (evento.keyCode == direita && x + taxa < 625) {
        x = x + taxa;
    }

}


document.onkeydown = leDoTeclado;


botao1.addEventListener("click", (e) => { //Botão 1

    cryptog = texto1.value//Texto de entrada a ser codificado
    cryptog = cryptog.toLowerCase()//Adaptação para letra maiuscula
    cryptog = cryptog.split("")//Quebra do texto em array de letras
    cryptog2 = cryptog.slice()//Copia de vetor
    cryptogTam = cryptog.length //Tamanho do Texto

    cod = (x / 25) + 0.5
    chave = cod

    alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    alfabetoTam = alfabeto.length

    for (let a = 0; a < cryptogTam; a++) { //Pega cada item do Vetor e faz a tranformação de um por um

        for (let h = 1; h < alfabetoTam; h++) { //Faz a troca de letras 

            cryptog[a] = cryptog[a].replace(alfabeto[h - chave], alfabeto[h]) //Identifica que letra tem que trocar

            if (cryptog[a] != cryptog2[a]) {
                break // Acaba com o for quando detecta difenreça das letras
            }
        }
    }

    cryptog = cryptog.join("")
    saidah31.innerText = cryptog
    e.preventDefault()

})

botao2.addEventListener("click", (e) => { //Botão 2


    cryptog = texto2.value//Texto de entrada a ser codificado
    cryptog = cryptog.toLowerCase()//Adaptação para letra maiuscula
    cryptog = cryptog.split("")//Quebra do texto em array de letras
    cryptog2 = cryptog.slice()//Copia de vetor
    cryptogTam = cryptog.length //Tamanho do Texto

    cod = (x / 25) + 0.5
    chave = cod

    alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    alfabetoTam = alfabeto.length // Transforma as letras

    for (let a = 0; a < cryptogTam; a++) { //Pega cada item do Vetor e faz a tranformação de um por um

        for (let h = 1; h < alfabetoTam; h++) { //Faz a troca de letras 

            cryptog[a] = cryptog[a].replace(alfabeto[h - (26-chave)], alfabeto[h]) //Identifica que letra tem que trocar

            if (cryptog[a] != cryptog2[a]) {
                break // Acaba com o for quando detecta difenreça das letras
            }
        }
    }

    cryptog = cryptog.join("")
    saidah32.innerText = cryptog
    e.preventDefault()
})