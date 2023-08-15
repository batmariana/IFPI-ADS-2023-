// 22. Leia um valor em km, calcule e escreva o equivalente em m.

import { question } from "readline-sync";

// Entrada
const valor_km = Number(question('Digite um valor em km:'))

// Processamento 
const equivalente_em_metros = valor_km * 1000

// Saída
console.log(`O valor inicial ${valor_km} em quilometros, equivale a ${equivalente_em_metros} em metros.`)