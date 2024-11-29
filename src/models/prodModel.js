import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosProdutos(){
  const db = conexao.db("estoque-venda");
  const colecao = db.collection("produtos");
  return colecao.find().toArray();
}