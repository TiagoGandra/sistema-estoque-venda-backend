import express from "express";
import { listarProdutos, registarProduto } from "../controller/prodController.js"

const routes = (app) => {
  app.use(express.json());
  app.get('/produtos', listarProdutos);
  app.post('/produtos', registarProduto);
};

export default routes;