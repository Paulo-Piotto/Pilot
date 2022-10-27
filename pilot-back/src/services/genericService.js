import client from "../database.js";
import * as genericRepository from "../repositories/genericRepository.js";

async function create(newClient) {
  const result = await genericRepository.create(newClient);
  return result;
}

async function find(clientName) {
  const result = await genericRepository.find(clientName);
  if (!result) {
    throw { type: "not_found", message: "something not found" };
  }
  return result;
}

async function findAll() {
  const result = await genericRepository.findAll();
  if (!result) {
    throw { type: "not_found", message: "no records found" };
  }
  return result;
}

export { create, find, findAll };