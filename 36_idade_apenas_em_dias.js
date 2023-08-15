// 36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.


import {question} from 'readline-sync'

//Entrada
const anos = Number(question('Digite a idade em anos: '))
const meses = Number(question('Digite a idade em meses: '))
const dias = Number(question('Digite a idade em dias: '))

//Processamento
const idade_em_anos = anos * 365
const idade_em_meses = meses * 30
const soma_idade_total = idade_em_anos + idade_em_meses + dias

// Saída
console.log(`A idade correspondente eh de ${soma_idade_total} dias!`)