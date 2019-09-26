//resposta aqui

const r = require("readline-sync"); 
 
 let operacao = parseInt(r.question("Qual operação deseja realizar?"));
 let v1 = parseInt(r.question("Digite um valor: "));
 let v2 = parseInt(r.question("Digite um valor: "))


function valorSoma(v1, v2){
    let soma = v1 + v2;
 console.log(soma);
 }
 
 function valorSubtrair(v1, v2){
    let subtrair = v1 - v2;
 console.log(subtrair);
 }
 
 function valorMultiplicar(v1, v2){
    let multiplicar = v1 * v2;
 console.log(multiplicar);
 }
 
 function valoDividir(v1, v2){
   let  divdir = v1 / v2;
 console.log(divdir)
 }
 
 
 switch (operacao) {
     case 1:
        let resultado = soma(valor1, valor2)
        console.log(resultado)
        break 
          
         
     case 2:
             let resultado = subtrair(valor1, valor2)
             console.log(resultado)
         break   
       
 
     case 3:
             let resultado = multiplicar(valor1, valor2)
             console.log(resultado)
         break
     
 
     case 4:
             let resultado = divdir(valor1, valor2)
             console.log(resultado)
         break
 
     default:
          ("Operação inválida.")
         break;
 }