import User from '../models/User';
import bcrypt from 'bcryptjs';


// 새로운 유저를 만듦
// post method   /api/user
export const postUser = async (req, res) => {
 const {body:{email, password, name}} = req;
  try {
    const emailCheck = await User.findOne({email});
    if(emailCheck !== null){ return res.status(400).json({ register:false, error: true, message:'you can not use this email \n try again'}); }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        email, password:hash, name
    })
    console.log(newUser);
    return res.status(201).json({ register:true, error: false, message :''});
  } catch (error) {
    console.log(error);
    return res.status(409).json({ register:false, error: true, message :'register fail, try again'});
  }
};

export const patchMe = (req, res) => {
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

export const getMe = async ()=>{
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

export const postLogin = async (req, res) => {
  console.log(req)
  let user = { email: '', nickname: '', avatar: '', promise: '' };
  /*try {
    sql = `select * from user where email="${email}"`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        return res.send({ login: 'fail', user, loginType: 'email' });
      }
      if (result.length == 0) {
        return res.send({ login: 'fail', user, loginType: 'email' });
      } else {
        const hash = result[0].password;
        bcrypt.compare(password, hash, (err, login) => {
          if (err) {
            return res.send({ login: 'fail', user, loginType: 'password' });
          }
          if (login) {
            req.session.displayName = email;
            req.session.save(() => {
              user = {
                email: result[0].email,
                nickname: result[0].nickname,
                avatar: result[0].avatar,
                promise: result[0].promise
              };
              return res.send({ login: 'success', user, loginType: 'login' });
            });
          } else {
            return res.send({ login: 'fail', user, loginType: 'password' });
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.send({ login: 'fail' });
  }*/
};

export const getLogout = (req, res) => {
 /* req.session.destroy(function () {
    req.session; // db에있는 session이 지워짐
  });
  res.clearCookie('connect'); // 브라우저에있는 쿠키 세션이 지워짐
  return res.status(200).send({ logout: 'success' });*/
};
