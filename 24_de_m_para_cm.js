// 24. Leia um valor em m, calcule e escreva o equivalente em cm.

import { question } from "readline-sync";

// Entrada
const valor_metros = Number(question('Digite um valor em metros:'))

// Processamento 
const equivalente_em_cm = valor_metros * 100

// Saída
console.log(`O valor inicial ${valor_metros} em metros, equivale a ${equivalente_em_cm} em centímetros.`)