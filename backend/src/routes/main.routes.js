import { Router } from 'express';
import { addAseguradora } from '../controllers/asegu.controller.js';
import { addCliente } from '../controllers/client.controller.js';
import { addPrestamo } from '../controllers/presta.controller.js';

const router = Router();

router.post('/aseg', addAseguradora);

router.post('/clien', addCliente);

router.post('/pres', addPrestamo);

export default router;
