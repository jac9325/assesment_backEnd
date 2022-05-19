import jwt from "jsonwebtoken";

export const validateToken = (req, res, next) => {
  //token que se envia con bearer
  const token = req.headers["authorization"]
    ? req.headers["authorization"].split(" ")[1]
    : "";
  if (token) {
    jwt.verify(token, process.env.SECRET_KEY, (error, authData) => {
      if (!error) next();
      else {
        res.status(403).send();
      }
    });
  } else {
    res.status(403).send();
  }
};
