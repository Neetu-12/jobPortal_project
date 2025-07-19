import jwt from 'jsonwebtoken';

const isAuthontication = async (req, res, next) => {
    try {
        const cookieHeader = (req.headers.cookie)

        // console.log(req.headers, "cookieHeader");
        if (!cookieHeader) {
            return res.status(401).json({
                message: "No cookies found.",
                success: false
            });
        }

        let token = cookieHeader.split('=')[1];
        
        if (!token) {
            return res.status(401).json({
                message: "User not authontication.",
                success: false
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decode.userId);

        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            })
        };

        req.id = decode.userId;
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Authentication failed.",
            success: false
        });
    }

};

export default isAuthontication;
