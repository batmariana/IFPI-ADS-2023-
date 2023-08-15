/*44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a
quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada
pelo usuário.*/

import {question} from 'readline-sync'

//Entrada
const quantidade_de_latao = Number(question('Informe a quantidade de latão: '))


//Processamento
const cobre = quantidade_de_latao * 0.70
const zinco = quantidade_de_latao * 0.30

//Saída
console.log(`A quantidade de cobre eh de ${cobre.toFixed(1)} e a de zinco eh de ${zinco.toFixed(1)}!!`)