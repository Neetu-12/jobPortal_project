import express from 'express';
import isAuthontication from '../middleares/isAuthontication.js';
import { getAdminJobs, getAllJob, getJonById, postJob } from '../controllers/job.controller.js';
const router = express.Router();

router.route("/post").post(isAuthontication, postJob);
router.route("/get").get(getAllJob);                              // public - anyone can search jobs
router.route("/get/:id").get(getJonById);                         // public - anyone can view a job
router.route("/getadminjob").get(isAuthontication, getAdminJobs); // protected - only logged-in admins


export default router;