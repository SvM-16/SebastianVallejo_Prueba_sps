import {Router} from 'express'
import { createNota, getNotas, updateNota, deleteNota } from '../controllers/notasControllers'

const router = Router();

router.get('/notas', getNotas);
router.post('/notas', createNota);
router.delete('notas/:id', deleteNota);
router.put('/notas/:id', updateNota)

export default router;