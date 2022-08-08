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
  const pago_mensual = getQuote(Number(deuda), Number(meses));
  const final = getLastQuote(Number(deuda), Number(pago_mensual), Number(meses));
  var capital = deuda;

  var data = [];
  for (let num_cuota = 1; num_cuota <= meses; ++num_cuota) {
    let fechapago = new Date();
    fechapago.setMonth(fechapago.getMonth()+num_cuota);

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

    console.log(seg);

    var fecha_prestamo = getDateOnly();
    const newBody = {...body, fecha_prestamo} 

    console.log('NEW BOOODY ', newBody);

    const x = new Prestamo(newBody);
    await x.save().then(() => generateQuotesAndBouchers(x, seg, newBody));
    res.json({msg: 'Prestamo creado'})
  } catch (err) {
    error505(res, 'in addPrestamo');
  }
}
