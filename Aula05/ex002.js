//usar while para pegar somente os números pares até 20
let x =0;
while ( x <= 20) {
    if(x % 2 == 0) {
        console.log(x);
    }
    x++;
}

//Outra opção seria 
let y = 0;
while (y <= 20) {
    console.log(y);
    y+=2;
}