/*//NOTAÇÃO - DEFININDO UMA FUNÇÃO COMO VARIÁVEL 
let mult = function(x){
    return x * x
}
console.log(mult(4))

//ARROW FUNCTION 
let qualquer = () => {

}
*/
//FUNÇÃO ANINHADA
function adicao(a , b) {
    function mult(x) {
        return x * x;
    }
    return mult(a) + mult(b);
}
let a = adicao(2,3);
console.log(a);
//tem que dar 13


let add = subtracao(5,3);
function subtracao(y , z) {
    function div(w) {
        return w / w;
    }
    return div(y) + div(z);
}
console.log(add);
//TEM QUE DAR 2
