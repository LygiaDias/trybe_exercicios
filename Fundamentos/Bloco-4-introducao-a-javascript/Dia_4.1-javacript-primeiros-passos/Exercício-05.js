// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

let anguloA = 100;
let anguloB=  50;
let anguloC= 30;

let angulosPositivos= anguloA > 0 && anguloB > 0 && anguloC > 0
let somaDosAngulos= anguloA + anguloB + anguloC

if (angulosPositivos) {
    if (somaDosAngulos == 180){
        console.log (true)
    }else {
        console.log (false)
    };
}else{
    console.log ("Erro")
}   

