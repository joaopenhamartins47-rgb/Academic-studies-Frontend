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