import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão do ambiente

export async function getTodosProdutos(){ // Função assíncrona para obter todos os produtos
  const db = conexao.db("estoque-venda"); // Seleciona o banco de dados "estoque-venda"
  const colecao = db.collection("produtos"); // Seleciona a coleção "produtos"
  return colecao.find().toArray(); // Retorna todos os documentos da coleção como um array
};

export async  function cadastrarProduto(novoProd){
  const db = conexao.db("estoque-venda");
  const colecao = db.collection("produtos");
  return colecao.insertOne(novoProd);
};
