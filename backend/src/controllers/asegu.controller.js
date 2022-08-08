import { Asegu } from '../models/asegu.model.js';
import { error505 } from '../utils/errors.js';

export const addAseguradora = async (req, res) => {
  const { body } = req;
  try {
    const exist = await Asegu.findOne({where: {name : body.name}});
    if (exist)
      res.json(`Ya existe!`);
    else {
      const x = new Asegu(body);
      await x.save();
      res.json({msg: `${body.name} creado!`})
    }
  } catch (err) {
    error505(res, 'in addAsegur!');
  }
}
