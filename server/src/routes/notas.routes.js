import {Router} from 'express'
import { getNota ,createNota , deleteNota , updateNota} from '../controllers/notasControllers.js'

const router = Router();

router.get('/notas', getNota);
router.post('/notas', createNota);
router.delete('/notas/:id', deleteNota);
router.put('/notas/:id', updateNota)

export default router;