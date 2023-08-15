// 26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import { question } from "readline-sync";

// Entrada
const numero_dias = Number(question('Digite um numero de dias:')) 

// Processamento
const semanas = Math.floor(numero_dias/7) 
const dias = numero_dias % 7

// Saída
console.log(`Tem ${semanas}semana(s) e ${dias} dia(s).`)