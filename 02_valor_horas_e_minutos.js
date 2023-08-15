import {question} from 'readline-sync'

// 2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

// Entrada
const valor_horas_totais = Number(question('Digite um valor em horas:'))
const valor_minutos_totais = Number(question('Digite um valor em minutos:'))

// Processamento 
console.log(`O seu horário digitado foi ${valor_horas_totais} hora(s) e ${valor_minutos_totais} minuto(s).`)

const calcular_horario_total = (valor_horas_totais * 60) + valor_minutos_totais

// Saída
console.log(`O seu horário digitado anteriormente equivale a ${calcular_horario_total} minutos.`)
