import 'dotenv/config';
import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);



const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando...");
});


//select all
async function getTodosProdutos(){
  const db = conexao.db("estoque-venda");
  const colecao = db.collection("produtos");
  return colecao.find().toArray();
}
app.get('/produtos', async(req, res) => {
  const produtos = await getTodosProdutos();
  res.status(200).json(produtos);
});

// //select por código
// function buscarProdutoPorCod(codigo){
//   return produtos.findIndex((prod) => {
//     return prod.codigo === Number(codigo);
//   });
// }

// app.get('/produtos/:codigo', async(req, res) => {
//   const index = buscarProdutoPorCod(req.params.codigo);
//   res.status(200).json(produtos[index]);
// });

