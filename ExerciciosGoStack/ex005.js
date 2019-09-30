let i =0;
let usuarios = [{
    nome: "Lucas",
    habilidades: ["Javascript", "React", "ReactNative"]
},
{
    nome: "Karen",
    habilidades: ["VueJs", "Ruby on Rails", "Elixir"]
}
];

function skills() {
    for (i of usuarios) {
        console.log(`O ${i.nome} possui as seguinte habilidades : ${i.habilidades}.`);
        i++;
    }
}

skills();