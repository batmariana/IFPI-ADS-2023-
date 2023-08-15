// 18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.(c = 2 * p * r)

import { question } from "readline-sync";

// Entrada
const pi = 3.14
const raio = Number(question('Digite o valor do raio da circunferencia em cm:'))

// Processamento 
const comprimento_circunferencia = (2 * pi * raio)

// Saída
console.log(`o comprimento da circunferencia é de ${comprimento_circunferencia} cm. `)