// 23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from "readline-sync";

// Entrada
const valor_kg = Number(question('Digite um valor em kg:'))

// Processamento 
const equivalente_em_gramas = valor_kg * 1000

// Saída
console.log(`O valor inicial ${valor_kg} em kg, equivale a ${equivalente_em_gramas} em gramas.`)