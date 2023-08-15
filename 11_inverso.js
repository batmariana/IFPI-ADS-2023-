import { question } from "readline-sync";

// 11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
// Entrada 
const numero = Number(question("Digite um numero inteiro de 3 digitos:")) 

// Processamento 
const centenas = Math.trunc(numero/100)
const resto_centenas = (numero%100)
const dezenas = Math.trunc(resto_centenas/10) 
const unidades = (resto_centenas%10) 

// Saída 
console.log(`O número digitado foi (${numero}) e o seu inverso é (${unidades}${dezenas}${centenas}).`)