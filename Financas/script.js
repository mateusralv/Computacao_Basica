const ent = "28 JAN Mateus *99* 10,90 29 JAN Alan Uber 6,32 29 JAN Mateus Samsung 3,00"

let teste = {
    dia: [],
    mes: [],
    responsavel: [],
    descricao: [],
    valor: [],
}
var data = ent.split(" ")

for (const index in data){
    if(index == 0 || (index % 5) == 0){
        teste.dia.push(data[index])
    }
    if(index == 1){
        for (let j = 1; j <= data.length ; j = j+5){
            teste.mes.push(data[j])
        }
    }
    if(index == 2){
        for (let j = 2; j <= data.length ; j = j+5){
            teste.responsavel.push(data[j])
        }
    }
    if(index == 3){
        for (let j = 3; j <= data.length ; j = j+5){
            teste.descricao.push(data[j])
        }
    }
    if(index == 4){
        for (let j = 4; j <= data.length ; j = j+5){
            teste.valor.push(data[j])
        }
    }
}
console.log(teste)