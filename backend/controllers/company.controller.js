// import Company from '../model/company.model.js';
import Company from '../model/company.model.js';
import mongoose from 'mongoose';

export const addCompany = async (req, res) => {
    try {
        const { companyName } = req.body; // assuming you expect these fields
        // console.log(req.body);

        if (!companyName || companyName.trim() === "") {
            return res.status(400).json({
                message: "Company Name is required.",
                success: false
            });
        }

        const companyExist = await Company.findOne({ companyName });

        if (companyExist) {
            return res.status(409).json({
                message: "Company already exists.",
                success: false
            });
        }

        const newCompany = await Company.create({ companyName, userId: req.id });

        res.status(201).json({
            message: "Company registered successfully.",
            success: true,
            data: newCompany
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "You can't add same comapny", error });
    }
};

export const getCompany = async (req, res) => {
    try {

        const userId = req.id;
        // console.log(req.id);

        const companies = await Company.find({ userId });

        if (!companies) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Comapnies got succeefully.",
            data: companies,
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Something went wrong when you trying to get comapanies name.",
            error,
            success: false
        });
    }
}

export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(companyId)) {
            return res.status(400).json({
                message: "Invalid company ID.",
                success: false
            });
        }

        const company = await Company.findById(companyId);
        console.log("Company ID:", companyId, "\nResult:", company);


        if (!company) {
            return res.status(404).json({
                message: "Company is not found by Id.",
                company,
                success: false
            });
        }

        return res.status(200).json({
            message: "Comapany is found by id successfully.",
            company,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Company is not found with ID",
            error,
            success: false
        })

    }
}

export const updateCompany = async (req, res) => {
    try {

        const { companyName, description, website } = req.body;
        const file = req.file;
        // console.log(companyName, description, website);
        
        // Sapace for cloudnary

        const updateData = { companyName, description, website };

        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true })

        if (!company) {
            return res.status(404).json({
                message: "Company is not found by Id.",
                company,
                success: false
            });
        }

        return res.status(200).json({
            message:"Updated details success fully.",
            company,
            success: true
        })

    } catch (error) {
        console.log(error);
        return res.status(404).json({
            message: "Company is not found by Id.",
            error,
            success: false
        });
    }
};