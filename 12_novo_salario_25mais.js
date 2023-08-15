// 12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import {question} from "readline-sync";

// Entrada
const salario_inicial = Number(question('Digite o valor inicial do salario: R$'))

// Processamento
const calcular_aumento = 0.25 * salario_inicial // calculando os 25%
const atualizar_salario = (salario_inicial + calcular_aumento)

// Saída
console.log(`O novo salário é de R$ ${atualizar_salario}!`)