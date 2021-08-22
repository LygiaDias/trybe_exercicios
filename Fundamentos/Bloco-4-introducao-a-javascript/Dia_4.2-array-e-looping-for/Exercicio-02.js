// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// 1- Criar uma variável "Soma" para imprimir os resultados;
// 2- Fazer um looping for para o Array;
// 3- Retornar somando o array[posição] com varoável soma;
// 4- Usar o console.log para mostrar  resultado.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (let index = 0; index < numbers.length; index += 1){
 soma += numbers[index] 
}
 console.log (soma)

