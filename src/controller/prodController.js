import { getTodosProdutos } from "../models/prodModel.js"

export async function listarProdutos(req, res) {
  const prods = await getTodosProdutos();
  res.status(200).json(prods)
}