//31.Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import {question} from 'readline-sync'

//Entrada
const numero = Number(question('Digite um numero inteiro de 4 digitos: '))

//Processamento
const unidade_de_milhar = Math.floor(numero / 1000) 
const resto_milhar = numero % 1000 

const centena = Math.floor(resto_milhar / 100)
const resto_centenas = resto_milhar % 100

const dezena = Math.floor(resto_centenas / 10)
const unidade = resto_centenas % 10

// Convertendo para base decimal
const decimal = (unidade * (2 ** 0)) + (dezena * (2 ** 1)) + (centena * (2 ** 2)) + (unidade_de_milhar * (2 ** 3))

//Saída
console.log(` O numero binario digitado convertido para base decimal eh ${decimal}.`)