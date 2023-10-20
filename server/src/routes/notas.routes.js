import {Router} from 'express'
import { createNota, getNotas, getNota, updateNota, deleteNota } from '../controllers/notasControllers'

const router = Router();

router.get('/notas', getNotas);
router.get('/nota/:id', getNota);
router.post('/nota', createNota);
router.delete('nota/:id', deleteNota);
router.put('/nota/:id', updateNota)

export default router;