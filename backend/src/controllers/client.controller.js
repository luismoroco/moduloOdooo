import { Cliente } from '../models/client.model.js';
import { error505 } from '../utils/errors.js';

export const addCliente = async (req, res) => {
  const { body } = req;
  try {
    const exist = await Cliente.findOne({where: {doc_identifi: body.doc_identifi}});
    if (exist)
      res.json({msg:`el doc_ident: ${body.doc_identifi} ya existe!`});
    else {
      const x = new Cliente(body);
      await x.save();
      res.json({msg: `cliente: ${body.name} creado!`});
    }
  } catch {
    error505(res, 'in addCliente');
  }
}

export const getClientes = async (req, res) => {
  try {
    const data = await Cliente.findAll();
    res.status(200).json(data);
  } catch (err) {
    error505(res, 'in getClientes');
  }
}