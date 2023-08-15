// 37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.
// 1200 dias = 3 anos 3 meses 15 dias

import { question } from "readline-sync"

// Entrada
const idade_dias = Number(question('Digite a idade em dias: '))

//Processamento
const anos = Math.floor(idade_dias/365)
const resto_de_anos = idade_dias%365 //(o q sobrar vai virar meses)
const meses = Math.floor(resto_de_anos/30) // (numero de meses)
const dias = resto_de_anos%30

// Saída
console.log(`São ${anos}an(os), ${meses}mes(es) e ${dias}dias!`)