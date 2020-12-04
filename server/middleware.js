import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import User from './models/User';

dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  region: 'ap-northeast-2'
});

export const upload = multer({
  storage: multerS3({
    s3,
    acl: 'public-read',
    bucket: 'mood-upload'
  })
});

export const auth = async(req, res, next) => {
   const {
    cookies : {x_auth}
  } = req;
  try{
    if(!x_auth){ return res.status(400).json({ auth:false, error: true, message :'사용자가 유효하지 않습니다.\n올바른 방법으로 시도해 주세요.'});}
    // user의 id가 담김
    const decoded = jwt.verify(x_auth, process.env.SECRET_KEY)
    const user = await User.findById({_id:decoded, token:x_auth});
    if(!user){ return res.status(400).json({ auth:false, error: true, message :'사용자가 유효하지 않습니다.\n올바른 방법으로 시도해 주세요.'});}
      req.user = user;
      next();
  }catch(error){
    console.log(error);
    return res.status(400).json({ auth:false, error: true, message :'사용자가 유효하지 않습니다.\n올바른 방법으로 시도해 주세요.'})
  }

}