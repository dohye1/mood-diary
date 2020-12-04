// endpoint

const ROOT = "/"

//USER
const API_USER = '/api/user'; 
const LOGIN = '/login'; 
const LOGOUT = '/logout';
const AVATAR = '/avatar';

//DIARY
const API_DIARY = '/api/diary';
const COUNT = "/count";

const routes = {
  root:ROOT,
  apiUser : API_USER,
  login: LOGIN,
  logout: LOGOUT,
  avatar: AVATAR,
  apiDiary: API_DIARY,
  count : COUNT
};

export default routes;
