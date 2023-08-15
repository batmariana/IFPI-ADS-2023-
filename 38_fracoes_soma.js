//38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
// resultado em forma de fração.

import {question} from 'readline-sync'

// Entrada
const numerador_1 = Number(question('Digite o Numerador 1: '))
const denominador_1 = Number(question('Digite o Denominador 1: '))
const numerador_2 = Number(question('Digite o Numerador 2: '))
const denominador_2 = Number(question('Digite o Denominador 2: '))

// Processamento
const denominador = denominador_1 * denominador_2
const numerador = ((denominador/denominador_1)*numerador_1) + ((denominador/denominador_2)*numerador_2)

// Saída
console.log(`A soma é: ${numerador}/${denominador}`)