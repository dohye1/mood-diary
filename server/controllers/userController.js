
import bcrypt from 'bcryptjs';
let sql;

export const getMe = async ()=>{
}
export const postUser = async (req, res) => {
  /*const {
    body: {
      data: { email, password, nickname }
    }
  } = req;
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    sql = `insert into user(email, password, nickname) values ("${email}", "${hash}", "${nickname}")`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        return res.send({ register: 'fail', registerType: 'email' });
      }
      return res.send({ register: 'success', registerType: 'register' });
    });
  } catch (error) {
    console.log(error);
    return res.send({ register: 'fail', registerType: 'fail' });
  }*/
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
