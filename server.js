import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env
import express from "express"; // Importa o framework Express para criar a aplicação web
import routes from './src/routes/prodRoutes.js'; // Importa as rotas definidas em prodRoutes.js


const app = express(); // Cria uma instância do Express
routes(app); // Monta as rotas na aplicação Express

app.listen(3000, () => {
  console.log("Servidor escutando..."); // Inicia o servidor na porta 3000 e exibe uma mensagem no console
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

