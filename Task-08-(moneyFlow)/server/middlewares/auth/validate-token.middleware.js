const { JWT } = require("../../utils/jwt.util");

const ValidateToken = (req, res, next) => {

    let valid = true;
    const authorization = req.headers.authorization;
    if (!authorization) valid = false;
    else {
        try {
            
            const token = authorization.split(' ')[1]
            const user = JWT.verify(token)
            req.user = user
        } catch (err) {
            console.log(err)
            valid = false;
        }
    }

    if (!valid) return res.status(401).json({msg: "Invalid Token"});
    
    next();
}

module.exports = {ValidateToken}