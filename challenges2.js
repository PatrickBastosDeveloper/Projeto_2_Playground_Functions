// Desafio 10/
// Desafio resolvido com suporte dos Alunos Lucas Pimentel e Leonardo Mendonça.
function techList(tecnologia, name) {
    let arr = [];
    tecnologia = tecnologia.sort();
    if (tecnologia.length > 0) {
        for (index = 0; index < tecnologia.length; index += 1) {
            let objeto = {
                tech: tecnologia[index],
                name,
            }
            arr.push(objeto);
        }
        return arr;
    } else {
        return 'Vazio!'
    }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
