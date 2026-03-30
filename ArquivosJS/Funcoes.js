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
