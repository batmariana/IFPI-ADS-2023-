// 20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { question } from "readline-sync";

// Entrada
const temperatura_celsius = Number(question('Digite uma temperatura em °C:'))

// Processamento 
const calculando_para_fahrenheit = (((9 * temperatura_celsius) + 160) / 5)

// Saída
console.log(`A temperatura equivalente de Celsius para Fahrenheit é de:${calculando_para_fahrenheit}°F.`)