//resposta aqui


// const r = require("readline-sync");
// const a = parseInt(r.question("Digite 1 ou 2"));

// console.log(a);

// var r = require("readline-sync");
// var nome = r.question("Digite o nome: ");
// var r = require("readline-sync")
// var produto = parseFloat(r.question("Informe o Produto: "))

var r = require("readline-sync");
var produtos = [{nome: "Maçã", valor:1.5}, 
                    {nome:"Banana", valor:2.0}];
var posicao = parseInt(r.question("Escolha um produto entre 0 e 2: "));
var porcentagem = parseInt(r.question("Digite uma porcentagem: "));

var produtoSelecionado = produtos[posicao];
var desconto = produtoSelecionado.valor * (porcetagem / 100);

console.log("Produto " + produtoSelecionado.nome + " com desconto é R$ " + desconto.toFixed(2));
