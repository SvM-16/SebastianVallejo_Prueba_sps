import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/userControllers";

const router = Router();

router.get('/users', getUsers);
router.post('/users', createUser)

export default router;