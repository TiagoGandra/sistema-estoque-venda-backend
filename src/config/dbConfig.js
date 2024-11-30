import { MongoClient } from "mongodb"; // Importa o cliente MongoDB

export default async function conectarAoBanco(stringConexao){ // Função assíncrona para conectar ao banco de dados
  let mongoClient;

  try { // Bloco try-catch para tratamento de erros
    mongoClient = new MongoClient(stringConexao); // Cria um novo cliente MongoDB
    console.log('Conectando ao cluster do banco de dados...');
    await mongoClient.connect(); // Conecta ao banco de dados
    console.log('Conectado com MongoDB atlas com sucesso');
    return mongoClient; // Retorna o cliente conectado
  } catch (erro) {
    console.error('Falha na conexão com o banco!', erro); // Exibe mensagem de erro no console
    process.exit(); // Encerra a aplicação
  }
};