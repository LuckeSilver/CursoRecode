//Crie uma função que dado um intervalo (entre x e y) exiba todos número pares
let endereco = {
    rua : "Antônio de Assis",
    numero : 4,
    bairro : "centro",
    cidade : "Rio de Janeiro",
    uf : "SP"
};

function enderecoCara() {
    console.log(`O lucas mora em ${endereco.cidade} / ${endereco.uf}, no bairro ${endereco.bairro}, na rua ${endereco.rua}, com nº ${endereco.numero}.`)
}

enderecoCara();