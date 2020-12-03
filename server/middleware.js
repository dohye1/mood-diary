import multer from 'multer';
import multerS3 from 'multer-s3';
import aws from 'aws-sdk';

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

export const auth = (req, res, next) => {
  console.log(req);
  //  /api/user/me 구성시 작성예정
  // next();
}