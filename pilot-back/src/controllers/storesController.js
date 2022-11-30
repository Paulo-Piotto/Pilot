import * as storesService from "../services/storesService.js";

async function post(req, res) {
  const result = await storesService.create(req.body);
  return res.status(201).send(result);
}

async function find(req, res) {
  const result = await storesService.find(req.params.name);
  return res.status(200).send(result);
}

async function findAll(req, res) {
  const result = await storesService.findAll();
  return res.status(200).send(result);
}

export { post, find,  findAll};