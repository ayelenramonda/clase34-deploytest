import { Router } from 'express';
const router = Router();
import {loginPost, logout,  infoSession, loginGet, info } from '../controller/user.js';
import { validateLogIn } from '../middleweare/auth.js'

router.post('/login',loginPost);
router.get("/", loginGet);
router.get('/home', validateLogIn, infoSession);
router.get('/logout', logout);
router.get('/info', info)


export default router;