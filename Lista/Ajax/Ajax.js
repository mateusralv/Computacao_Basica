/* Exemplo Requisições AJAX
var xhr = new XMLHttpRequest()

xhr.open('GET','https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
xhr.send(null)

xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
       // console.log(JSON.parse(xhr.responseText))
       var dados = JSON.parse(xhr.responseText)
        for(i in dados){
           console.log(`o ${dados[i]['id']} é dado pelo nome ${dados[i]['nome']} seguido pela sigla: ${dados[i]['sigla']}`)
        }
    }
}

Exemplo Promises
var minhaPromese = function() {

    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()
        xhr.open('GET','https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
        xhr.send(null)

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else {
                    reject( 'Erro')
                }
            }
        }

    }
    )
}

var resultado = minhaPromese()
console.log(resultado)
*/

axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
    .then(function(response){
        console.log(response["data"])
    })
    .catch(function(error){
        console.error(Error)
    })