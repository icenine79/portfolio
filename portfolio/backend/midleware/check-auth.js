const jwt = require('jsonwebtoken');
const { nextTick } = require('process');


module.exports = (req,res,send) =>{
  try{
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "secret_this_should_be_longer")
  next();
} catch (error){
  res.status(401).json({message: "Auth failed!"})
}
}
