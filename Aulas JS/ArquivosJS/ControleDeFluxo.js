let idade = 26;

switch (idade) {
    case 18:
        console.log ("Você tem 18 anos");
        break;
    case 25:
        console.log ("Você tem 25 anos");
        break;
    case 30:
        console.log ("Você tem 30 anos");
        break;
    default:
        console.log ("Idade não encontrada");
        break;
}

let PaymentStatus = "Pago";

switch (PaymentStatus) {
    case "Pago":
        console.log ("O pagamento foi realizado com sucesso");
        break;
    case "Pendente":
        console.log ("O pagamento está pendente");
        break;
    case "Cancelado":
        console.log ("O pagamento foi cancelado");
        break;
    default:
        console.log ("Status do pagamento não encontrado");
        break;
}   

//3 principais estruturas de repetição: for, while e do while

//1. For
for (let i = 0; i < 5; i++) {
    console.log ("Iteração: " + i);
}

let i = 0;

while(i < 5){
    console.log ("Executando loop", i);
    i++;
}