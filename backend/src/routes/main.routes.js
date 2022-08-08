import { Router } from 'express';
import { addAseguradora } from '../controllers/asegu.controller.js';
import { addCliente, getClientes } from '../controllers/client.controller.js';
import { addPrestamo, detailPrestamoById, getPrestamos, payQuoteById } from '../controllers/presta.controller.js';

const router = Router();

router.post('/aseg', addAseguradora);

router.post('/clien', addCliente);
router.get('/clien', getClientes);

router.post('/pres', addPrestamo);
router.get('/pres', getPrestamos);
router.get('/pres/:id', detailPrestamoById);
router.delete('/pres/:id', payQuoteById);

export default router;
