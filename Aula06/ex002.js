/*Função Recursiva - é uma função que invoca a si própria */

//Algoritmo para verificar se um número é PAR

function par (x) {
    if (x % 2 == 0) 
        return `O número ${x} é par`;
    else 
        return `O número ${x} é impar`;
    
}
console.log(par(2));