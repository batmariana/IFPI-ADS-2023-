// 42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e
// ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.


import {question} from 'readline-sync'

//Entrada
const pontoA_x1 = Number(question('Valor da coordenada x1: '))
const pontoA_y1 = Number(question('Valor da coordenada y1: '))

const pontoB_x2 = Number(question('Valor da coordenada x2: '))
const pontoB_y2 = Number(question('Valor da coordenada y2: '))

// Processamento
const calculo_distancia = ((pontoB_x2 - pontoA_x1)**2) + ((pontoB_y2 - pontoA_y1)**2)
const distancia = Math.sqrt(calculo_distancia, 1/2)

//Saída
console.log(`A distância entre os pontos A(um) e B(dois) eh ${distancia.toFixed(2)}!!`)