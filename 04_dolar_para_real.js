import { question } from "readline-sync";

// 4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

console.log("Olá, bem vindo ao Converter de Dolar para Real!")

// Entrada
const digitar_cotacao_dolar = Number(question('Digite o valor do dolar hoje (de USD - R$BRL ):'))
console.log(`Certo, a cotacao atual do dolar eh R$ ${digitar_cotacao_dolar}!`)
const valor_para_conversao = Number(question('Digite o valor que quer converter:'))

// Processamento
const conversao_valor_para_real = valor_para_conversao * digitar_cotacao_dolar

// Saída
console.log(`O valor em reais é de R$ ${conversao_valor_para_real}!`)