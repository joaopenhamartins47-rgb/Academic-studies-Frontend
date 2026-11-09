function inverter_palavra()
{
    let palavra = prompt("Digite a palavra que deseja inverter");
    let invertido = "";
    for(let i = palavra.length-1; i>=0; i--)
    {
        invertido += palavra.charAt(i);
    }
    console.log(invertido);
}