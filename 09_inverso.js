import { question } from "readline-sync";

// 9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
// Entrada
const numA = Number(question('Digite um numero A:'))
const numB = Number(question('Digite um numero B:'))

console.log(`Os números que voce digitou foram (A,B) = (${numA},${numB})...`)
console.log(`Na ordem inversa ficam (B,A) = (${numB},${numA})!`)
