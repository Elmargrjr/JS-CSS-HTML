let idades = [18, 22, 30, 15, 25];

for (let i = 0; i < idades.length; i++) {
    let idade = idades[i];
    verificarIdade(idade);
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log ("Você é maior de idade");
    } else {
        console.log ("Você é menor de idade");
    }
}

//VAR respeita o escopo de função, ou seja, se for declarada dentro de uma função, ela só existe dentro dessa função. Já o LET respeita o escopo de bloco, ou seja, se for declarada dentro de um bloco (como um if ou um loop), ela só existe dentro desse bloco. O VAR pode ser redeclarada e reatribuída, enquanto o LET não pode ser redeclarada, mas pode ser reatribuída. O VAR é hoisted (içado) para o topo do seu escopo, mas não é inicializado até a linha onde é declarada. O LET também é hoisted, mas não é inicializado e fica em um "temporal dead zone" até a linha onde é declarada.
