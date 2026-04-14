import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { addCompany, getCompany, getCompanyById, updateCompany } from '../controllers/company.controller.js';

const router = express.Router();


// router.route("/register").post(register);
router.route("/addCompany").post(isAuthenticated, addCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/params/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id").post(isAuthenticated, updateCompany);


export default router; 