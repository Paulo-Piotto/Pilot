import * as genericService from "../services/genericService.js";

async function post(req, res) {
  const result = await genericService.create(req.body);
  return res.status(201).send(result);
}

async function find(req, res) {
  const result = await genericService.find(req.params.name);
  return res.status(200).send(result);
}

async function findAll(req, res) {
  const result = await genericService.findAll();
  return res.status(200).send(result);
}

export { post, find,  findAll};