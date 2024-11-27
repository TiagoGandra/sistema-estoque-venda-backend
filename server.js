import express from "express";

const app = express();
app.listen(3000, () => {
  console.log("Servidor escutando...")
});

const produtos = [
  {
    id: 1,
    descricao: "Perfume fofo",
    quantidade: "5",
    preco: "40",
    codigo: 123
  },
  {
    id: 2,
    descricao: "Perfume fofo 2",
    quantidade: "3",
    preco: "45",
    codigo: 124
  }
]
//select all
app.get('/produtos', async(req, res) => {
  res.status(200).json(produtos);
});

//select por código
function buscarProdutoPorCod(codigo){
  return produtos.findIndex((prod) => {
    return prod.codigo === Number(codigo);
  });
}

app.get('/produtos/:codigo', async(req, res) => {
  const index = buscarProdutoPorCod(req.params.codigo);
  res.status(200).json(produtos[index]);
});

