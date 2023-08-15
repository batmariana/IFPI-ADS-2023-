import { question } from "readline-sync";

// 3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

// Entrada
const minutos_totais_inicial = Number(question('Digite um valor em minutos:'))

// Processamento

const horas = Math.floor(minutos_totais_inicial/60)
const minutos = minutos_totais_inicial % 60

// Saída
console.log(`Seu valor em horas é: ${horas} horas e ${minutos} minutos.`)