import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// 새로운 유저를 만듦
// post method   /api/user
export const postUser = async (req, res) => {
 const {body:{email, password, name}} = req;
  try {
    const emailCheck = await User.findOne({email});
    if(emailCheck !== null){ return res.status(400).json({ message:'you can not use this email \n try again'}); }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        email, password:hash, name
    })
    console.log(newUser);
    return res.status(201).json({ message :''});
  } catch (error) {
    console.log(error);
    return res.status(409).json({message :'register fail, try again'});
  }
};


export const postLogin = async (req, res) => {
  const { body : {email, password}} = req;
  try {
    // 해당 이메일의 사용자가 있는지 확인
    const nowUser = await User.findOne({email});
    if(nowUser === null) { return res.status(400).json({ message :'해당 이메일의 사용자가 없습니다. \n회원가입을 먼저 해주세요.'});} 
    
    const hash = nowUser.password;

    bcrypt.compare(password, hash, (err, loginResult) => {
      if (err) {
         throw Error;
      }
      if(loginResult){
          // 로그인성공했으면 jwt으로 토큰만들기
          const token = jwt.sign(nowUser._id.toString(), process.env.SECRET_KEY);
          nowUser.token = token;
          nowUser.save();
          return res.cookie("x_auth", token).status(200).json({ message :'', user : nowUser});
      }else{
        return res.status(400).json({ message :'비밀번호가 틀렸습니다. \n다시 시도해주세요.', user:{}});
      }
    })
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message :'login fail. try again'});
  };
}


export const patchUser = (req, res) => {
  /*const {
    body: { Nickname, Promise },
    session: { displayName }
  } = req;
  console.log(Nickname, Promise, displayName);
  try {
    sql = `update user set nickname="${Nickname}", promise="${Promise}" where email="${displayName}"`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        console.log(error);
        return res.send({ editProfile: 'fail' });
      }
      return res.send({ editProfile: 'success' });
    });
  } catch (error) {
    console.log(error);
  }*/
};

export const getUser = (req, res)=>{
  const { user } = req;
  try { 
    console.log(user);
    return res.status(200).json({message:'', user})
  }catch(error){
    console.log(error);
    return res.status(404).json({message:'사용자 정보를 얻는데에 실패했습니다', user: {}})

  }
}

export const postAvatar = (req, res) => {
  /*try {
    const file = req.file;
    let avatarAdd;
    let email;
    if (file !== undefined) {
      const {
        file: { location },
        session: { displayName }
      } = req;
      avatarAdd = location;
      email = displayName;
    } else {
      const {
        session: { displayName }
      } = req;
      email = displayName;
      avatarAdd =
        'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png';
    }
    sql = `update user set avatar="${avatarAdd}" where email="${email}"`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        return res.send({ register: 'fail' });
      }
      console.log(result);
      return res.send({ avatarChange: 'success', avatarAdd });
    });
  } catch (error) {
    console.log(error);
  }*/
};

export const getLogout = (req, res) => {
 /* req.session.destroy(function () {
    req.session; // db에있는 session이 지워짐
  });
  res.clearCookie('connect'); // 브라우저에있는 쿠키 세션이 지워짐
  return res.status(200).send({ logout: 'success' });*/
};
