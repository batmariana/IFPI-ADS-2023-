// 35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:
// número = 9534 ; soma = 9+5+3+4 = 21.

import {question} from 'readline-sync'

//Entrada
const numero = Number(question('Digite um numero inteiro de 4 digitos: ')) // 4926 = 21

//Processamento
const unidade_de_milhar = Math.floor(numero / 1000) // 4!!!!!
const resto_milhar = numero % 1000 // 926

const centena = Math.floor(resto_milhar / 100) // 926/100 = 9!!!!
const resto_centenas = resto_milhar % 100 // 26

const dezena = Math.floor(resto_centenas / 10) // 26/10 = 2 !!!!!
const unidade = resto_centenas % 10 // 26%10 = 6 !!!!!

const calculo = ( unidade_de_milhar +  centena + dezena + unidade )

// Saída
console.log(`Numero digitado foi ${numero} e a soma de seus elementos eh ${calculo}!`)