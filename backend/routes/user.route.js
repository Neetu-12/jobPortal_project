import express from 'express';
import { login, logOut, register, updateProfile } from '../controllers/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import singleUpload from '../middlewares/singleUpload.js';


const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfile);
router.route("/logout").post(logOut);

export default router;