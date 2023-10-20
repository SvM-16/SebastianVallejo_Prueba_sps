import { Router } from "express";
import { getUsers, getUser, createUser } from "../controllers/userControllers";

const router = Router();

router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.pots('/user', createUser)

export default router;