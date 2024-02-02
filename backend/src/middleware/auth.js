// auth.js
const jwt = require("jsonwebtoken");

// auth.js
function authenticateToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // const decodedToken = jwt.verify(token, secretKey);
    const secretKey = process.env.JWT_SECRET_KEY || "^token*secret";
    const decodedToken = jwt.verify(token, secretKey);

    // mendapatkan  cust_id dari token
    // const userId = decodedToken.cust_id;
    req.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = authenticateToken;
