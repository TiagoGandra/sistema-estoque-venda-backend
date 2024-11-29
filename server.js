import 'dotenv/config';
import express from "express";
import routes from './src/routes/prodRoutes.js';

const app = express();
routes(app);

app.listen(3000, () => {
  console.log("Servidor escutando...");
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

