import express from 'express';
import isAuthontication from '../middleares/isAuthontication.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';

const router = express.Router();

router.route("/apply/:id").get(isAuthontication, applyJob);
router.route("/getAppliedJob").get(isAuthontication, getAppliedJobs);
router.route("/:id/getApplicants").get(isAuthontication, getApplicants);
router.route("/status/:id/update").post(isAuthontication, updateStatus);


export default router;
