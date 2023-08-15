// 13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

import { question } from "readline-sync";

// Entrada
const valor_inicial = Number(question('Digite um valor em R$:'))

// Processamento
const calcular_porcentagem = valor_inicial * 0.70
const valor_atualizado = valor_inicial - calcular_porcentagem

// Saída
console.log(`O valor atualizado é R$${valor_atualizado}!`)