import { question } from "readline-sync";

// 10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

// Entrada
const num1 = Number(question('Digite um numero A:'))
const num2 = Number(question('Digite um numero B:'))

// Processamento 
const quociente = Math.floor(num1/num2)
const resto = (num1%num2)

// Saída
console.log(`O quociente é ${quociente.toFixed(1)} e resto é ${resto}.`)
