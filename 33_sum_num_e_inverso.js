// 33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
// (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import {question} from 'readline-sync'

//Entrada
const numero = Number(question('Digite um numero inteiro de 3 digitos: '))

//Processamento
const centena = Math.floor(numero / 100) // num inicial = 348 => 348/100 = 3
const resto = numero % 100 // 48

const dezena = Math.floor(resto / 10) // 48/10= 4

const unidade = resto % 10 // 48%10=8

// montando o inverso
const montando_inverso = (unidade * 100)+(dezena*10)+(centena*1) // 800 + 40 + 3 = 843

// calculando diferença

const sum = Math.abs(numero + montando_inverso)

// Saída
console.log(`A soma eh de ${sum} pontos!`)
