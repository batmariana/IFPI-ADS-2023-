// 15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { question } from "readline-sync";

// Entrada
const base = Number(question('Digite o valor da base do triangulo em cm:'))
const altura = Number(question('Digite o valor da altura do triangulo em cm:'))

// Processamento 
const area = (base * altura)/2

// Saída
console.log(`A area do triangulo é de ${area} cm^2. `)