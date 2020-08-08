const data = "29 JUN-Mateus-Recargacel-	25,00 29 JUN Uberbr Uber Trip Help.	3,82"

let teste = {
    data: ['29 JUN','27 JUN'],
    responsavel: ['Mateus','Alan'],
    descricao: ['recargaCel','Uber'],
    valor: [25.00,3.82]
}

console.log(teste)

function inverter(s){
    return s.split("").reverse().join("");
}

var teste1 = [ 'ue', 'oma', 'oacamargorp' ]
function resultado (fraseSep){
    var fraseFinal = ""
    for (var i = 0 in fraseSep){
        var palavraFinal = inverter(fraseSep[i])
        fraseFinal = fraseFinal + " " + palavraFinal
        
    }
    console.log(fraseFinal)
}

resultado(teste1)
