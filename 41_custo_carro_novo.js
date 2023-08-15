/**41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor
seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e
escreva o custo ao consumidor. */


import {question} from 'readline-sync'

//Entrada
const custo_de_fabricacao = Number(question('Digite o custo de fabricação de um carro novo: '))

// Processamento
const porcentagem_para_distribuidor_e_impostos = custo_de_fabricacao * 0.28 * 0.45 
const custo_ao_consumidor = custo_de_fabricacao + porcentagem_para_distribuidor_e_impostos

//Saída
console.log(`O custo repassado ao consumidor eh de R$${custo_ao_consumidor.toFixed(2)}.`)