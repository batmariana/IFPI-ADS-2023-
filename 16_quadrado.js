// 16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import { question } from "readline-sync";

// Entrada
const lado = Number(question('Digite o valor do lado do quadrado em cm:'))

// Processamento 
const area = lado * lado

// Saída
console.log(`A area do quadrado é de ${area} cm^2. `)