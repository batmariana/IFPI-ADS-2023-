// 17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import { question } from "readline-sync";

// Entrada
const base = Number(question('Digite o valor da base do retangulo em cm:'))
const altura = Number(question('Digite o valor da altura do retangulo em cm:'))

// Processamento 
const area = (base * altura)

// Saída
console.log(`A area do retangulo é de ${area} cm^2. `)