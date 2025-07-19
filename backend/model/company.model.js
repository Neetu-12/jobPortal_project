import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String,
        // required: true
    },
    website: {
        type: String
    },
    location: {
        type: String,
    },
    logo: {
        type: String,
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId, // MAybe geeting error
        ref: "User",
        required: true
    }
}, { timestamps: true });

// export const Company = mongoose.model("Company", companySchema);

const Company = mongoose.model("Company", companySchema);
export default Company;