/**46. Uma loja vende seus produtos no sistema entrada mais duas prestações, sendo a entrada maior ou igual a
cada uma das duas prestações; estas devem ser iguais, inteiras e as maiores possíveis. Por exemplo, se o
valor da mercadoria for R$ 270,00, a entrada e as duas prestações são iguais a R$ 90,00; se o valor da
mercadoria for R$ 302,00, a entrada é de R$ 102,00 e as duas prestações são iguais a R$ 100,00.
Escreva um algoritmo que receba o valor da mercadoria e forneça o valor da entrada e das duas
prestações, de acordo com as regras acima. */

import {question} from 'readline-sync'

//Entrada
const valor = Number(question('Digite o preço da mercadoria: '))


//Processamento
const primeira_prestacao = Math.floor(valor / 3)
const segunda_prestacao = primeira_prestacao
const valor_de_entrada = valor - (primeira_prestacao + segunda_prestacao)

//Saída
console.log(`O valor da entrada eh R$${valor_de_entrada.toFixed(2)} e das parcelas, 2x de R$${primeira_prestacao.toFixed(2)}!!`)