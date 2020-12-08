import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from './models/User';

dotenv.config();

export const auth = async(req, res, next) => {
   const {
    cookies : {x_auth}, headers:{local_token}
  } = req;
  let userToken;
  if(x_auth){
    userToken = x_auth
  }else if(local_token){
    userToken = local_token
  }
  try{
    // user의 id가 담김
    if(userToken){
      const decoded = jwt.verify(userToken, process.env.SECRET_KEY)
      const user = await User.findById({_id:decoded, token:userToken});
      if(!user){ return res.status(400).json({message :'2사용자가 유효하지 않습니다.\n올바른 방법으로 시도해 주세요.'});}
      req.user = user;
      next();
    }
  }catch(error){
    console.log(error);
    return res.status(400).json({message :'3사용자가 유효하지 않습니다.\n올바른 방법으로 시도해 주세요.'})
  }

}