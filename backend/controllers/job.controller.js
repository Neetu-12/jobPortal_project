import { Job } from "../model/job.model.js";

//  for admin post
export const postJob = async (req, res) => {
    try {
        const {
            title,
            description,
            requirements,
            salary,
            location,
            jobType,
            position,
            experience, // ✅ Fixed spelling
            companyId,
            applications //I need to check application why I am not able to created in post
        } = req.body;

        const userId = req.id;
        console.log( title,
            description,
            requirements,
            salary,
            location,
            jobType,
            position,
            experience, // ✅ Fixed spelling
            companyId,
            applications);
        

        if (
            !title || !description || !requirements || !salary || !location ||
            !jobType || !position || !experience || !companyId || applications
        ) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const job = await Job.create({
            title,
            description,
            requirements,
            salary,
            location,
            companyId,
            jobType,
            position,
            experience,
            created_by: userId,
            applications
        });

        return res.status(201).json({
            message: "Job posted successfully.",
            job,
            success: true
        });

    } catch (error) {
        console.error("Error posting job:", error);
        return res.status(500).json({
            message: "Something went wrong.",
            success: false
        });
    }
};

// Need to check this api n -- Need to check this route......Need to understand what is happening here!!!!
export const getAllJob = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";

        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } }
            ]
        }
// 
        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({ createAt: -1 });
        // console.log(jobs);
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs are not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            message: "Jobs found.",
            success: true
        });

    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: "Something went wrong.",
            success: false
        });
    }
}

export const getJonById = async (req, res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId);
        // console.log(job);

        if (!job) {
            return res.status(404).json({
                message: "Jobs are not found.",
                success: false
            });
        }

        return res.status(200).json({
            job,
            message: "Jobs found.",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong.",
            success: false
        });
    }

}

export const getAdminJobs = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ "created_by": adminId });
        // console.log(  jobs);

        if (!jobs) {
            return res.status(404).json({
                message: "Jobs are not found.",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            message: "Jobs found.",
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Something went wrong.",
            success: false
        });
    }

};
