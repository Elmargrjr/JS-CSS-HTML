// "Interface" Logger: qualquer objeto que tenha um método log(mensagem)
function processarPedido(pedido, logger) {
  // Dependemos apenas de logger.log(...)
  logger.log(`Processando pedido ${pedido.id} do cliente ${pedido.cliente}`);
}

// Implementação 1: logger que escreve no console
const ConsoleLogger = {
  log(mensagem) {
    console.log("[CONSOLE] " + mensagem);
  }
};

// Implementação 2: logger que guarda mensagens em memória
const MemoryLogger = {
  mensagens: [],
  log(mensagem) {
    this.mensagens.push(mensagem);
  }
};

const pedido = { id: 123, cliente: "Ana" };

processarPedido(pedido, ConsoleLogger);
processarPedido(pedido, MemoryLogger);

console.log("Mensagens em memória:", MemoryLogger.mensagens);