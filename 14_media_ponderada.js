// 14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { question } from "readline-sync";

// Entrada
const notaA = Number(question('Digite a primeira nota:'))
const peso1 = Number(question('Peso da 1a nota:'))

const notaB = Number(question('Digite a segunda nota:'))
const peso2 = Number(question('Peso da 2a nota:'))

const notaC = Number(question('Digite a terceira nota:'))
const peso3 = Number(question('Peso da 3a nota:'))

// Processamento
const calcular_media = ((notaA * peso1) + ( notaB * peso2) + ( notaC * peso3)) / (peso1 + peso2 + peso3)

// Saída
console.log(`A média ponderada é: ${calcular_media}`)