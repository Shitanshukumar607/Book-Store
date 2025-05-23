import jwt from "jsonwebtoken";

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

//   console.log("token is", token);

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid credientials" });
    }
    req.user = user;
    next();
  });
};

export default verifyAdminToken;
