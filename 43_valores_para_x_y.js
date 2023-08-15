import {question} from 'readline-sync'

//Entrada
const a = Number(question('Digite o valor de a: '))
const b = Number(question('Digite o valor de b: '))
const c = Number(question('Digite o valor de c: '))
const d = Number(question('Digite o valor de d: '))
const e = Number(question('Digite o valor de e: '))
const f = Number(question('Digite o valor de f: '))

// Processamento
const x = (((c*e) - (b*f)) / ((a*e) - (b*d)))
const y = (((a*f) - (c*d)) / ((a*e) - (b*d)))

//Saída
console.log(`O valor de X é ${x.toFixed(1)} e o valor de Y é ${y.toFixed(1)}.`)