// 29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import { question } from "readline-sync";

// Entrada
const numero_meses = Number(question('Digite um numero de meses:')) 

// Processamento
const anos = Math.floor(numero_meses/12) 
const meses = numero_meses%12

// Saída
console.log(`Há ${anos} ano(s) e ${meses} mes(es).`)