// 30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele
// corresponde.

import { question } from "readline-sync";

// Entrada
const numero_minutos = Number(question('Digite um numero de minutos:')) 

// Processamento
const dias = Math.floor(numero_minutos/1440) 
const resto_dias = numero_minutos%1440
const horas = Math.floor(resto_dias/60) 
const minutos = resto_dias % 60


// Saída
console.log(`Há ${dias} dia(s), ${horas} hora(s) e ${minutos} minuto(s).`)