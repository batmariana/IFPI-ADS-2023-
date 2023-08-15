// 19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import { question } from "readline-sync";

// Entrada
const pi = 3.14
const raio = Number(question('Digite o valor do raio da esfera em cm:'))

// Processamento 
const volume_esfera = ((4 * pi * (raio*raio*raio)) / 3)

// Saída
console.log(`O volume da esfera é de ${volume_esfera.toFixed(2)} cm^3. `)