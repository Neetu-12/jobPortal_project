import express from 'express';
import { login, logOut, register, updateProfile } from '../controllers/user.controller.js';
import isAuthontication from '../middleares/isAuthontication.js';


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthontication, updateProfile);
router.route("/logout").post(logOut);

export default router;