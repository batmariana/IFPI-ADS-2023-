import {question} from "readline-sync"

// 6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6) 

// Entrada
const velocidade_kmh = Number(question('Indique uma velocidade em km/h:'))

// Processamento
const velocidade_ms = velocidade_kmh / 3.6

// Saída
console.log(`Sua velocidade é de ${velocidade_ms} m/s.`)