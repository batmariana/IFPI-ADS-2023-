// 21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync";

// Entrada
const temperatura_fahrenheit = Number(question('Digite uma temperatura em °F:'))

// Processamento 
const calculando_para_celsius = (((5 * temperatura_fahrenheit) - 160) / 9)

// Saída
console.log(`A temperatura equivalente de Fahrenheit para Celsius é de:${calculando_para_celsius}°C.`)