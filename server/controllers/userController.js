import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// 새로운 유저를 만듦
// post method   /api/user
export const postUser = async (req, res) => {
  const {
    body: { email, password, name }
  } = req;
  try {
    const emailCheck = await User.findOne({ email });
    if (emailCheck !== null) {
      return res
        .status(400)
        .json({ message: 'you can not use this email \n try again' });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      email,
      password: hash,
      name
    });
    console.log(newUser);
    return res.status(201).json({ message: '' });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: 'register fail, try again' });
  }
};

export const postLogin = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  try {
    // 해당 이메일의 사용자가 있는지 확인
    const nowUser = await User.findOne({ email });
    if (nowUser === null) {
      return res
        .status(400)
        .json({
          message:
            '해당 이메일의 사용자가 없습니다. \n회원가입을 먼저 해주세요.'
        });
    }

    const hash = nowUser.password;

    bcrypt.compare(password, hash, (err, loginResult) => {
      if (err) {
        throw Error;
      }
      if (loginResult) {
        // 로그인성공했으면 jwt으로 토큰만들기
        const token = jwt.sign(nowUser._id.toString(), process.env.SECRET_KEY);
        nowUser.token = token;
        nowUser.save();
        return res
          .cookie('x_auth', token)
          .status(200)
          .json({ message: '', user: nowUser });
      } else {
        return res
          .status(400)
          .json({
            message: '비밀번호가 틀렸습니다. \n다시 시도해주세요.',
            user: {}
          });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: 'login fail. try again' });
  }
};

export const patchUser = async (req, res) => {
  const {
    body: { name, selfPromise },
    user: { _doc, _id }
  } = req;
  try {
    await User.findByIdAndUpdate({ _id }, { name, selfPromise });
    return res
      .status(200)
      .json({ message: '', user: { ..._doc, name, selfPromise } });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: 'update fail, try again', user: {} });
  }
};

export const getUser = (req, res) => {
  const { user } = req;
  try {
    return res.status(200).json({ message: '', user });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ message: '사용자 정보를 얻는데에 실패했습니다', user: {} });
  }
};

export const deleteUser = async (req, res) => {
  const {
    user: { _id }
  } = req;
  try {
    await User.findByIdAndUpdate({ _id }, { token: '' });
    return res
      .clearCookie('x_auth')
      .status(200)
      .json({ message: '로그아웃이 성공적으로 완료되었습니다.' });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: '로그아웃에 실패했습니다' });
  }
};
