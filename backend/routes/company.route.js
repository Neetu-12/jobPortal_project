import express from 'express';
import isAuthontication from '../middleares/isAuthontication.js';
import { addCompany, getCompany, getCompanyById, updateCompany } from '../controllers/company.controller.js';

const router = express.Router();


// router.route("/register").post(register);
router.route("/addCompany").post(isAuthontication, addCompany);
router.route("/get").get(isAuthontication, getCompany);
router.route("/params/:id").get(isAuthontication, getCompanyById);
router.route("/update/:id").post(isAuthontication, updateCompany);


export default router; 