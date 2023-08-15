// 28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele
// corresponde.

import { question } from "readline-sync";

// Entrada
const numero_horas = Number(question('Digite um numero de horas:')) 

// Processamento
const semanas = Math.floor(numero_horas/168) 
const resto_semanas = numero_horas%168
const dias = Math.floor(resto_semanas/24) 
const horas = resto_semanas % 24


// Saída
console.log(`Há ${semanas} semana(s), ${dias} dia(s) e ${horas} horas(s).`)