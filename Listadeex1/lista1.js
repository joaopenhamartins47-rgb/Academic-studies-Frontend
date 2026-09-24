/*
Imprimir invertido
*/ 

function invertido(str)
{
    let resultado = "";
    for(let i=str.length -1; i>=0; i--){
        resultado += str[i];
    }
    return resultado;
}

console.log(invertido("Invertido"))

/*
    2. Implemente um script JS que exiba uma frase de trás para frente (inverter a ordem das palavras, sem inverter as letras). Exemplo:
        ◦ Frase: A possibilidade de realizarmos um sonho é o que torna a vida interessante
        ◦ Frase invertida: interessante vida a torna que o é sonho um realizarmos de possibilidade A
*/

function inverter_frase(str) {
    let frase = "";

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === ' ') {
            

            let j = i + 1;
            while (j < str.length && str[j] !== ' ') {
                frase += str[j];
                j++;
            }
            
            frase += ' ';
        }
    }

    let k = 0;
    while (k < str.length && str[k] !== ' ') {
        frase += str[k];
        k++;
    }

    return frase;
}

//Jeito javascript de inverter frase

function inverter_javascript(str)
{
    let palavras = [];
    let frase = str.split(" ");
    let j = 0;

    for(let i = frase.length-1; i>=0; i--)
    {
        palavras.push(frase[i]);
    }
    return palavras.join(" ");

}

/*
3 - Implemente um algoritmo onde o usuário possa guardar palavras dentro de um vetor. 
Antes de inserir uma nova palavra dentro do vetor, 
verifique se a mesma não existe dentro do vetor. 
Caso exista, avise o usuário e não faça a inserção
*/

function guardar_palavras(vet, palavra)
{
    var existe = false;
    for(let i = 0; i<vet.length && !existe; i++)
    {
        if(palavra == vet[i])
           existe = true;
    }
    if(existe)
        console.log("Palavra ja existente no vetor!\n");
    else
    {
        vet[vet.length] = palavra;
    }
    return vet;
}

/*
4 - Construa um script JS que remova as vogais de uma string (Considere também as vogais acentuadas). 
*/

function remover_vogais(str)
{
    let vogais = "aeiouáàãéêâôíóõúAEIOUÁÀÃÉÊÂÔÍÓÕÚ";    
    let resultado = "";
    for(let i=0;i<str.length;i++)
    {
        if(vogais.indexOf(str[i]) === -1)
        {
            resultado += str[i];
        }
    }
    return resultado
}


/*
5 - Crie um script JS para calcular o salário líquido através de um salário bruto (decimal) de entrada. 
O salário líquido é calculado descontando as porcentagens de IR E INSS. 
Cada faixa salarial, possui porcentagens diferentes, utilize as tabelas abaixo para consultar:
*/

function calcular_salario()
{
    let salario_bruto = prompt("Digite o seu salario bruto!");
    salario_bruto = salario_bruto.replace(",", ".");
    salario_bruto = parseFloat(salario_bruto);
    let inss = 0, ir=0, aliquota=0.0;
    if(!isNaN(salario_bruto))
    {
        
        if(salario_bruto <= 1621.00)
        {
            aliquota = 0.075;
            inss = aliquota*salario_bruto;
        }
        else if(salario_bruto <= 2902.84)
        {
            aliquota = 0.09;
            inss = salario_bruto *aliquota - 24.32;
        }
        else if(salario_bruto <= 4354.27)
        {
            aliquota = 0.12;
            inss = salario_bruto *aliquota - 111.4;
        }
        else if(salario_bruto <= 8475.55)
        {
            aliquota = 0.14;
            inss = salario_bruto * aliquota - 198.49;
        }
        else
        {
            inss = 8475.55 * 0.14 - 198.49; 
        }
        

        let salario_liquido = 0.0;
        salario_bruto -= inss;
        if(salario_bruto <= 2259.2)
        {
            salario_liquido = salario_bruto;
        }
        else if(salario_bruto <= 2826.65)
        {
            aliquota = 0.075;
            ir = salario_bruto *aliquota - 169.44;
        }
        else if(salario_bruto <= 3751.05)
        {
            aliquota = 0.15;
            ir = salario_bruto *aliquota - 381.44;
        }
        else if(salario_bruto <= 4664.68)
        {
            aliquota = 0.225;
            ir = salario_bruto*aliquota - 662.77;
        }
        else
        {
            aliquota = 0.275;
            ir = salario_bruto * aliquota - 896;
        }
        if(ir > 0)
        {
            salario_liquido = salario_bruto - ir;
        }

        console.log("Salario liquido: " + salario_liquido.toFixed(2) + "\nINSS: " + inss.toFixed(2) + "\nIR: " + ir.toFixed(2));
    }
}

