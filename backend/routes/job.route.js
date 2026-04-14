import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJob, getJobById, postJob } from '../controllers/job.controller.js';
const router = express.Router();

router.route("/post").post(isAuthenticated, postJob);
router.route("/get").get(getAllJob);                              // public - anyone can search jobs
router.route("/get/:id").get(getJobById);                         // public - anyone can view a job
router.route("/getadminjob").get(isAuthenticated, getAdminJobs); // protected - only logged-in admins


export default router;