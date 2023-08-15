// 39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

import {question} from 'readline-sync'

//Entrada
const numero_1 = Number(question('Informe o primeiro número: '))
const numero_2 = Number(question('Informe o segundo número: '))
const numero_3 = Number(question('Informe o terceiro número: '))

// Processamento
const r = (numero_1 + numero_2)**2

const s = (numero_2 + numero_3)**2

const d_final = (r + s) / 2

// Saída
console.log(`O resultado de D = (R + S )/ 2 é : ${d_final.toFixed(1)}.`)