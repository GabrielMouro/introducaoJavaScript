let numero1 = 8;
let numero2 = 45;
let numero3 = 4;
let numero4 = 16;

if (numero1 > numero2 && numero1>numero3 && numero1 > numero4){
    console.log('O maior número é: ', numero1);
} 
else if (numero2 > numero1 && numero2 > numero3 && numero2 > numero4){
    console.log('O maior número é: ', numero2);
} 
else if (numero3 > numero1 && numero3 > numero2 && numero3 > numero4){
    console.log('O maior número é: ', numero3);
} 
else {
    console.log('O maior número é: ', numero4);
}
