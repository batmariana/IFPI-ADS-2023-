// 25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import { question } from "readline-sync";

// Entrada
const numero_metros = Number(question('Digite um numero de metros:')) 

// Processamento
const km = Math.floor(numero_metros/1000) 
const metros = numero_metros % 1000

// Saída
console.log(`O numero ${numero_metros}m, digitado inicialmente, equivale agora a ${km}quilometro(s) e ${metros}metro(s).`)