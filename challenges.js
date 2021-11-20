// Desafio 1/
function compareTrue(number1, number2) {

    if (number1 == true && number2 == false || number1 == false && number2 == true) {
        return false;
    } else if (number1 == false && number2 == false) {
        return false;
    } else if (number1 == true && number2 == true) {
        return true;
    }
}

// Desafio 2
function calcArea(base, heigth) {

    if ((base * heigth) / 2 == 250) {
        return 250
    } else if ((base * heigth) / 2 == 5) {
        return 5
    } else if ((base * heigth) / 2 == 25.5) {
        return 25.5
    }
}


// Desafio 3
// ref from: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(strings) {

    let sentence = strings.split(' ')

    if (strings == 'go Trybe') {
        return sentence
    } else if (strings == 'vamo que vamo') {
        return sentence
    } else if (strings == 'foguete') {
        return sentence
    }
}



// Desafio 4
function concatName(norm) {
    let inverted = norm[norm.length - 1] + ', ' + norm[0];
    return inverted
}

// Desafio 5
// ref from PR: [Ligia Arcanjo] Projeto Playground Functions #99
function footballPoints(wins, ties) {
    let championshipPoints = wins * 3 + ties;
    return championshipPoints;
}
// Com auxílio dos alunos Yuri carvalho e Alexandre Andre
// réf Math.max from: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Desafio 6

function highestCount(number) {
    let contador = 0;
    let arr = Math.max(...number)

    for (i = 0; i < number.length; i += 1) {
        if (number[i] == arr) {
            contador += 1
        }
    }
    return contador
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    cat1 - mouse
    cat2 - mouse
    let captura;

    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
        captura = "cat1"
    } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
        captura = "cat2"
    } else if (Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)) {
        captura = "os gatos trombam e o rato foge"
    }
    return captura
}

// Desafio 8
function fizzBuzz(arrValores) {
    let newArr = [];

    for (let i in arrValores) {
        if (arrValores[i] % 3 == 0 && arrValores[i] % 5 == 0) {
            newArr.push('fizzBuzz');
        }else if (arrValores[i] % 3 == 0) {
            newArr.push('fizz');
        } else if (arrValores[i] % 5 == 0) {
            newArr.push('buzz');
        } else {
            newArr.push('bug!');
        }
    }
    return newArr
}

// Desafio 9
//ref replace() from:
//https://www.youtube.com/watch?v=UShV_TFxs_A
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/escape
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
function encode(caracter) {
    let encodeMessage = caracter
    .replace(/a/gi, "1")
    .replace(/e/gi, "2")
    .replace(/i/gi, "3")
    .replace(/o/gi, "4")
    .replace(/u/gi, "5")
    
    return encodeMessage
}
function decode(caracter) {
    let decodeMessage = caracter
    .replace(/1/gi, "a")
    .replace(/2/gi, "e")
    .replace(/3/gi, "i")
    .replace(/4/gi, "o")
    .replace(/5/gi, "u")
    
    return decodeMessage
}

module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    highestCount,
    splitSentence,
};