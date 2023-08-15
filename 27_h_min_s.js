// 27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos
// segundos ele corresponde.

import { question } from "readline-sync";

// Entrada
const numero_segundos = Number(question('Digite um numero de segundos:')) 

// Processamento
const horas = Math.floor(numero_segundos/3600) 
const resto_horas = numero_segundos%3600
const minutos = Math.floor(resto_horas/60) 
const segundos = resto_horas % 60


// Saída
console.log(`Há ${horas} hora(s), ${minutos} minuto(s) e ${segundos} segundo(s).`)