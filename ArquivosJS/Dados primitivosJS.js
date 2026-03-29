let nome = "João";
console.log (nome);

let idade = 22;
console.log ("A idade do joão é de " + idade + " Anos");

let EMaiorDeIdade = idade >= 18;
console.log ("João é maior de idade? " + EMaiorDeIdade);

//Null
let endereço = null;
console.log ("O Endereço de João é: " + endereço);


//Undefined
let senha;
console.log ("A senha de João é: " + senha);

if(endereço){
    console.log ("O endereço de joão é: " + endereço);
} else {
    console.log ("Endereço de joão com problema");
}

//Exemplo de coerção de dados, detecta oque é número e oque é string

let nome2 = "20";

if(nome){
    console.log ("Teste de coerção, nome: " + nome * 2);
}

if(nome2){
    console.log ("Teste de coerção, com nome 2: " + nome2 * 2);
}

//Coerção implícita de tipos

//NULL e UNDEFINED são tratados como false
//Strings e números são tratados como true
//0 e strings vazias são tratadas como false

console.log ("5" + 1); // 51 (string)
console.log ("5" - 1); // 4 (número)
console.log ("5" * 2); // 10 (número)
console.log ("5" / 2); // 2.5 (número)
