import { Router } from "express";
import { getUserInfo, login, signup } from "../controllers/AuthController.js";
import { verifyToken } from "../middlewares/AuthMiddleware.js";

const router=Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/user-info',verifyToken, getUserInfo)

export default router