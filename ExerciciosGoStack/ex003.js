/*Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" 
e retorna um booleano true/false caso exista ou não.*/
var skills = ["Javascript" , "ReactJs", "React Native"];
function possuiHabilidade() {
    if (skills[0] == "Javascript") {
        console.log("true");
    };
};

possuiHabilidade();