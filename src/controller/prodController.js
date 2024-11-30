import { getTodosProdutos, cadastrarProduto } from "../models/prodModel.js"; // Importa a função para obter todos os produtos do banco de dados

export async function listarProdutos(req, res) { // Função assíncrona para listar produtos
  const prods = await getTodosProdutos(); // Obtém os produtos do banco de dados
  res.status(200).json(prods); // Retorna os produtos em formato JSON com status 200 (sucesso)
};

export async function registarProduto(req, res){
  const novoProd = req.body;

  try{
    const prodCadastrado = await  cadastrarProduto(novoProd);
    res.status(200).json(prodCadastrado);
  } catch (erro) {
    console.error(erro.message);
    res.status(400).json({"Erro": "Falha na requisição ao cadastrar produto!"});
  }
};