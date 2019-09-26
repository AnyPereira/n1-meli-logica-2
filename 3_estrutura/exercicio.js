//resposta aqui

var r = require("readline-sync")

var produtos = [
    {nome: 'Nescau',tempoDeValidade: 200,congelado : false},        
    {nome: 'Arroz',tempoDeValidade: 1000,congelado: false},
    {nome: 'Frango',tempoDeValidade: 15,congelado: true},
    {nome: 'Biscoito',tempoDeValidade: 2,congelado: false}]

    var posicao = parseInt(r.question("Escolha um produto entre 0 e 3: "));
    var diasParaOVencimentoDoProduto = parseInt(r.question("Digitar quantos dias faltam para o produto vencer: "));
    
    var produtoSelecionado = produtos[posicao];
    var desconto = (diasParaOVencimentoDoProduto * 100) / tempoDeValidade.tempoDeValidade;

    if (desconto <= 2)
    {
    console.log('Descartar produto, muito proximo de vencer!');
    }

    else if (desconto <= 10 && produtoSelecionado.congelado === false)
    {
        console.log('Desconto!  Produto não congelado e próximo da validade.');
    }

    else if (desconto <= 5 && produtoSelecionado.congelado === true)
    {
        console.log('Desconto! Produto congelado e próximo da validade.');
    }
    else
    {
        console.log('Produto longe do vencimento.');
    }