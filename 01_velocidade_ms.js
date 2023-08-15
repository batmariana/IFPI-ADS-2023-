import {question} from "readline-sync"

// 1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

// Entrada
const velocidade_ms = Number(question('Indique uma velocidade em m/s:'))

// Processamento
const velocidade_kmh = velocidade_ms * 3.6

// Saída
console.log(`Sua velocidade é de ${velocidade_kmh} km/h.`)