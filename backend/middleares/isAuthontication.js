import jwt from 'jsonwebtoken';

const isAuthontication = async (req, res, next) => {
    try {
        // Use req.cookies (provided by cookie-parser middleware in index.js)
        // DO NOT use cookieHeader.split('=') — JWT tokens contain '=' chars (base64)
        // which would silently break the token!
        const token = req.cookies?.token;

        if (!token) {
            return res.status(401).json({
                message: "User not authenticated. Please login.",
                success: false
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);

        if (!decode) {
            return res.status(401).json({
                message: "Invalid token.",
                success: false
            });
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
