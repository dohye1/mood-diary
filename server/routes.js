// endpoint

const ROOT = "/"

//USER user와 관련된 정보를 얻는 api
// post 방식으로 보내면 사용자 추가
const API_USER = '/api/user'; 
const LOGIN = '/login'; 
const LOGOUT = '/logout';
const AVATAR = '/avatar';

//DIARY
const API_DIARY = '/api/diary'; //get, post, patch
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
