//Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

var anosEstudo = 7;

function experiencia() {
    if (anosEstudo <= 1) {
        console.log("Iniciante!");
    } else if (anosEstudo > 1 && anosEstudo < 3) {
        console.log("Intermediário!");
    }  else if (anosEstudo >= 3 && anosEstudo <6) {
        console.log("Avançado!")
    } else {
        console.log("JEDI!")
    }
}
experiencia();

/*
De 0 - 1 ano = Iniciante
De 1 - 3 anos = Intermediário
De 3 - 6 anos = Avançado
Acima de 7 anos = Jedi
*/