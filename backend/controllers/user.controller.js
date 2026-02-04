import { User } from '../model/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


export const register = async (req, res) => {
    try {

        const { fullname, email, phoneNumber, password, role } = req.body;
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                message: "Something is missing.",
                success: false
            })
        }
        const user = await User.findOne({ email: email.toLowerCase() });
        // const user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                message: 'Email is already exist.',
                success: false

            });
        };

        const hashPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email: email.toLowerCase(),
            phoneNumber,
            password: hashPassword,
            role
        });

        return res.status(201).json({
            message: "Account created successfully.",
            success: true
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'An error occurred while registering the user.',
            success: false
        });
    }
}

export const login = async (req, res) => {
    try {

        const { email, password, role } = req.body;
        // console.log(email, password, role );

        if (!email || !password || !role) {
            return res.status(404).json({
                message: "Email and password is wrong.",
                success: false
            });
        };

        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "Email is not exist."
            })
        }
        //  one password will get from user who will trying to login 2nd time same prsn, other one is existing password who is already login.
        const isPassword = await bcrypt.compare(password, user.password); // it will be return value in true and false or bulean value only

        if (!isPassword) {
            return res.status(400).json({
                message: "Incorrect password.",
                success: false
            })
        }

        if (role !== user.role) {
            return res.status(400).json({
                message: "Account does not exist with current role.",
                success: true
            })
        };

        const tokenData = {
            userId: user._id.toString()
        };
        console.log(user._id.toString());

        const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        }

        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'strict' }).json({
            message: `Welcome, you loggined successfully.`,
            user,
            success: true,
            token
        })

    } catch (error) {
        console.log(error);

    }
};


export const updateProfile = async (req, res) => {
    try {

        const { fullname, email, phoneNumber, profile } = req.body;
        console.log(req.body);

        // let skillsArray;
        // if (skills) {
        //     skillsArray = skills.split(',');
        // }
        const userId = req.id // getting from  middleware authontication...
        // console.log(req.id ,',,,,');

        let user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found.",
                success: false
            });
        }

        // updating data...
        if (fullname) {
            user.fullname = fullname
        }
        if (profile) {
            user.profile = profile
        }
        if (email) user.email = email
        if (phoneNumber) user.phoneNumber = phoneNumber
        // if (bio) user.bio = bio
        // if (skills) user.skills = skillsArray
        // resume comes later here...

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        }

        return res.status(200).json({
            message: "Updated successfully.",
            user,
            success: true
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Authorization is failed.",
            success: false
        });
    };
};


export const logOut = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {
            httpOnly: true,
            expires: new Date(0) // or use maxAge: 0
        })
            .json({
                message: "Logged out successfully.",
                success: true
            });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: "Logout failed.",
            success: false
        });
    }
};