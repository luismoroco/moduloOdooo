import { Prestamo } from '../models/prestamo.model.js';
import { Detalles } from '../models/detail.model.js';
import { error505 } from '../utils/errors.js';
import { Asegu } from '../models/asegu.model.js';
import { getDateOnly, getDeuda, getQuote, getLastQuote } from '../utils/fun.utils.js';

async function createRowPy(body) {
  try {
    const x = new Detalles(body);
    await x.save();
  } catch (err) {
    console.log('error pipipi!');
  }
}

function generateQuotesAndBouchers(pres, seg, body) {
  const idPres = pres?.get('id');
  const { monto, meses, interes } = body;

  const deuda = getDeuda(Number(monto), Number(interes), Number(seg));
  var pago_mensual = getQuote(Number(deuda), Number(meses));
  const final = getLastQuote(Number(deuda), Number(pago_mensual), Number(meses));
  var capital = deuda;

  var data = [];
  for (let num_cuota = 1; num_cuota <= meses; ++num_cuota) {
    let fechapago = new Date();
    fechapago.setMonth(fechapago.getMonth()+num_cuota);
    if (num_cuota === meses) { capital = 0; pago_mensual = final;}
    const newBody = {idPres, num_cuota, fechapago, pago_mensual, capital };
    data.push(newBody);
    capital -= pago_mensual;
  }

  Promise.all(data.map(function(x) {
    createRowPy(x);
  })).then();
}

export const addPrestamo = async (req, res) => {
  const { body } = req;
  try {
    const v = await Asegu.findByPk(body.idAseg);
    const seg = v?.get('monto');
    var fecha_prestamo = getDateOnly();

    const newBody = {...body, fecha_prestamo} 
    const x = new Prestamo(newBody);
    await x.save().then(() => generateQuotesAndBouchers(x, seg, newBody));
    res.json({msg: 'Prestamo creado'})
  } catch (err) {
    error505(res, 'in addPrestamo');
  }
}

export const getPrestamos = async (req, res) => {
  try {
    const x = await Prestamo.findAll();
    res.json(x);
  } catch (err) {
    error505(res, 'in getPrestamos');
  }
}

export const detailPrestamoById = async (req, res) => {
  const { id } = req.params;
  try {
    const exist = await Prestamo.findByPk(id);
    if (exist) {
      const items = await Detalles.findAll({
        where: {idPres: id}, 
        order: [['num_cuota', 'ASC']]
      });
      res.json(items)
    } else {
      res.json({msg: 'No existe'});
    }
  } catch (err) {
    error505(res, 'in detailById');
  }
}

export const payQuoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Detalles.findByPk(id);
    if (item) {
      await item.destroy().then(() => {res.json({msg: 'quota borrada!'})});
    } else 
      res.json({msg: 'No existe la quota'});
  } catch (err) {
    error505(res, 'in payQuote')
  }
}

export const deletePrestamoById = async (req, res) => {
  const { id } = req.params;
  try {
    const exist = await Prestamo.findByPk(id);
    if (exist) {
      await exist.destroy();
      res.status(200).json({msg: 'OK'});
    } else {
      res.status(300).json({msg: 'NO EXISTE'});
    }
  } catch (err) {
    error505(res, 'in deletePresById')
  }
}