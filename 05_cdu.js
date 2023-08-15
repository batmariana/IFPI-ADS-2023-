import { question } from "readline-sync";

// 5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

// Entrada
const numero = Number(question('Digite um numero de tres digitos:')) // 537

// Processamento
const centenas = Math.floor(numero/100) // 5 !!!!!!!!
const resto_centenas = numero%100 // 37
const dezenas = Math.floor(resto_centenas/10) // 3 !!!!!
const unidades = resto_centenas % 10 // 7

// Calculo 
const soma = (centenas + dezenas + unidades)

// Saída
console.log(`${soma}`)