import express from 'express';
import isAuthontication from '../middleares/isAuthontication.js';
import { getAdminJobs, getAllJob, getJonById, postJob } from '../controllers/job.controller.js';
const router = express.Router();

router.route("/post").post(isAuthontication, postJob);
router.route("/get").get(isAuthontication, getAllJob);
router.route("/getadminjob").get(isAuthontication, getAdminJobs);
router.route("/get/:id").get(isAuthontication, getJonById);


export default router;