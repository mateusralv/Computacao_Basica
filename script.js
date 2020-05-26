var num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
var res = document.getElementById('res')
let valores = []

var timeStart = performance.now()
res.innerHTML = ('')

//Testes se o numero já se encontra no array
function possui(n, l) {
    let teste = l.includes(n)
    return teste
}
//Testa se o numero está entre 0 e 100
function teste(n) {
    if (Number(n) < 1 || Number(n) > 100) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (teste(num.value) || possui(num.value, valores)) {
        window.alert('Valor invalido ou já adicionado ')
    } else {
        //Tudo ok
        valores.push(num.value) //adiciona a entrada no final do array
        let item = document.createElement(`option`) //cria um option
        item.text = `Valor ${num.value} adicionado` // o texto do option
        lista.appendChild(item) /* adiciona o item anterior no tab*/
        res.innerHTML = '' //limpa o res
    }
    num.value = '' //limpa o campo 
    num.focus() //leva a seleção pra lá 
}


//Encontra o maior valor do array
function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

//Menor valor
function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

//soma dos valores
function soma(numArray) {
    let resul = 0
    for (let c = 0; c < Number(numArray.length); c++) {
        resul = resul + Number(numArray[c])
    }
    return resul
}

//media dos valores
function media(numArray) {
    let soma1 = soma(numArray)
    let media = (soma1 / (numArray.length))
    return media
}
var timeEnd = performance.now()
function finalizar() {
    if (valores.length == 0) {
        window.alert("Adicione valores antes de começar")
    } else {
        res.innerHTML = (` A lista ordenada é ${valores.sort()}</br>`)
        res.innerHTML += (`</br>o maior numero é ${getMaxOfArray(valores)}</br>`)
        res.innerHTML += (`</br>A soma dos elementos é ${soma(valores)}</br>`)
        res.innerHTML += (`</br>A media dos numeros é ${media(valores)}</br>`)
        res.innerHTML += (`</br>O total valores é ${valores.length}</br>`)
        res.innerHTML += (`</br>O tempo de execução é de ${timeEnd - timeStart} ms`)
    }

}