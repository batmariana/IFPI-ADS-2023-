// 34. Leia 3 números, calcule e escreva a média dos números.

import { question } from "readline-sync";

// Entrada
const notaA = Number(question('Digite a primeira nota:'))
const notaB = Number(question('Digite a segunda nota:'))
const notaC = Number(question('Digite a terceira nota:'))

// Processamento
const media = (notaA + notaB + notaC)/3

// Saída
console.log(`A media eh: ${media}!`)