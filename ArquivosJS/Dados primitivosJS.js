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


//O comando + junta strings, concatena, enquanto os demais são operações matemáticas

console.log ("5" + 1); // 51 (string)
console.log ("7" + " Cristiano Ronaldo");
console.log ("5" - 1); // 4 (número)
console.log ("5" * 2); // 10 (número)
console.log ("5" / 2); // 2.5 (número)

//Da para fazer coerção explícita
let numero = 23;
let NumeroEmString = String(numero);

//Ao contrário
let StringDeNumero = "587";
let StringDeNumeroParaNumero = Number(StringDeNumero);

//Outros jeitos
let OutroNumero = (20).toString();

console.log (typeof numero, numero);
console.log (typeof NumeroEmString, NumeroEmString);
console.log (typeof StringDeNumero, StringDeNumero);
console.log (typeof StringDeNumeroParaNumero, StringDeNumeroParaNumero);    

//Se tentassemos converter algo que não é um número para número, o resultado seria NaN (Not a Number)
let StringInvalida = "Neymar";
let StringInvalidaParaNumero = Number(StringInvalida);
console.log (StringInvalida);
console.log (typeof StringInvalidaParaNumero, StringInvalidaParaNumero);

//Váriaveis
//let,const e var
//let deixa voce mudar o valor da variável e até o tipo dela
//const nao deixa, o valor é constante

const pi = 3.14;

const horasdoDia = 24;

const nomeCompleto = "Cristiano Ronaldo";

console.log (pi);
console.log (horasdoDia);
console.log (nomeCompleto);

let endereço2 = 12;
let endereço2s = String(endereço2);

console.log ("O endereço de João é: " + endereço2);
console.log (typeof endereço2, endereço2);
console.log (typeof endereço2s, endereço2s);

//Var nao tem escopo de bloco, ou seja, ela pode ser acessada fora do bloco onde foi declarada, o que pode levar a problemas de segurança e bugs no código. Por isso, é recomendado usar let ou const em vez de var para declarar variáveis em JavaScript.
//Let tem escopo de bloco, ou seja, ela só pode ser acessada dentro do bloco onde foi declarada, o que ajuda a evitar problemas de segurança e bugs no código. Por isso, é recomendado usar let ou const em vez de var para declarar variáveis em JavaScript.

for (var i = 0; i < 5; i++) {
    var nome3 = "João";
    console.log (i);
}

console.log (nome3); // Isso vai funcionar, pois var tem escopo de função, não de bloco

for (let i = 0; i < 5; i++) {
    let nome4 = "Maria";
    console.log (nome4);
}

//console.log(nome4); // Isso vai gerar um erro, pois let tem escopo de bloco


//Operadores

let count = 0;
count++; // Incremento, soma 1
console.log (count);

console.log ("é igual", 5 == "5");
// == compara valor (com coerção de tipo)
console.log ("é estritamente igual", 5 === "5");
// === compara valor e tipo (sem coerção de tipo)


console.log("é igual?", 1 == 1 ? "Sim" : "Não");
//condicional ? Verdadeiro : Falso


