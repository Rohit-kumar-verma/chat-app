import { Router } from "express";
import { signup } from "../controllers/AuthController.js";

const route=Router()

route.get('/signup', signup)

export default route