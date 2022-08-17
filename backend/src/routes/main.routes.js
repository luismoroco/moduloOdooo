import { Router } from 'express';
import { addAseguradora } from '../controllers/asegu.controller.js';
import { addPrestamo, detailPrestamoById, getPrestamos, payQuoteById, deletePrestamoById } from '../controllers/presta.controller.js';

const router = Router();

router.post('/aseg', addAseguradora);

router.post('/pres', addPrestamo);
router.get('/pres', getPrestamos);
router.get('/pres/:id', detailPrestamoById);
router.delete('/pres/:id', payQuoteById);

router.delete('/del/:id', deletePrestamoById);

export default router;
