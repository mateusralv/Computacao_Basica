let ent = "ue oma oacamargorp!"

//Pegar o ponto no final da string
let ponto = ent[ent.length - 1]

//retorna a string sem o ultimo elemento
let tratar = ent.slice(0, -1)

//Conta a quantidade de " "
function contar(l) {
    let cont = 0
    for (let j = 0; j < l.length; j++) {
        let teste = " "
        if (teste == l[j]) {
            cont++
        }
    }
    return cont
}

let espaços = contar(tratar)

//Separa as palavras 
var array = tratar.split(" ")


//inverte as palavras 
function inverter(s) {
    return s.split("").reverse().join("");
}

//forma a frase correta 
function resultado(fraseSep) {
    var fraseFinal = ""
    for (var i = 0 in fraseSep) {
        var palavraFinal = inverter(fraseSep[i])
        fraseFinal = fraseFinal + " " + palavraFinal

    }
    return fraseFinal
}

var saida = resultado(array)

console.log(`Em riverso: ${ent}`)
console.log(`Em português: ${saida}` + ponto)
