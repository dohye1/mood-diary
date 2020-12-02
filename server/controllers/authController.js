import bcrypt from 'bcryptjs';
let sql;

export const postLogin = async (req, res) => {
  /*const {
    body: {
      data: { email, password }
    }
  } = req;
  let user = { email: '', nickname: '', avatar: '', promise: '' };
  try {
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
