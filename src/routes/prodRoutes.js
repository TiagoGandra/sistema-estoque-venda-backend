import express from "express";
import { listarProdutos } from "../controller/prodController.js"

const routes = (app) => {
  app.use(express.json());
  app.get('/produtos', listarProdutos);
}

export default routes;