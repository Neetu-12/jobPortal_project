import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: [{
        type: String
    }],
    salary: {
        type: Number,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    // I need to check here becasue I have changed companyId to company for populate in job controller
    company: {
        type: mongoose.Schema.Types.ObjectId, // MAybe geeting error
        ref: "Company",
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId, // MAybe geeting error
        ref: "User",
        required: true
    },
    applications: [{
        type: mongoose.Schema.Types.ObjectId, // MAybe geeting error
        ref: "Application",
    }]
}, { timestamps: true });

export const Job = mongoose.model("Job", jobSchema);
