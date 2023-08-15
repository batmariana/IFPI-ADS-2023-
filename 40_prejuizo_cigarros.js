// 40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele
// fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import {question} from 'readline-sync'

//Entrada
const anos = Number(question('Digite quantos anos você já usa cigarro: '))
const quantidade_de_cigarros = Number(question('Digite quantos cigarros você fuma por dia: '))
const preco_medio = Number(question('Digite o preço médio da carteira de cigarros: '))

// Processamento
const valor_unidade = quantidade_de_cigarros * preco_medio / 20

const dias = anos * 365

const total_gasto = valor_unidade * dias

//Saída
console.log(`O valor gastado por um fumante eh R$${total_gasto.toFixed(2)}.`)