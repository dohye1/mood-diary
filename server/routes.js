// endpoint

const ROOT = "/"

// AUTH 사용자의 인증과 관련된 api
const API_AUTH = '/api/auth'; 
const LOGIN = '/login'; 
const LOGOUT = '/logout';

//USER user와 관련된 정보를 얻는 api
// post 방식으로 보내면 사용자 추가
const API_USER = '/api/user'; 
// get 메서드 사용시 token의 주인 정보를 return 함
// patch메서드 사용시 user info 변경
const ME = '/me';
const AVATAR = '/avatar';

//DIARY
const API_DIARY = '/api/diary'; //get, post, patch
const COUNT = "/count";

const routes = {
  root:ROOT,
  apiAuth: API_AUTH,
  login: LOGIN,
  logout: LOGOUT,
  apiUser : API_USER,
  me:ME,
  avatar: AVATAR,
  apiDiary: API_DIARY,
  count : COUNT
};

export default routes;
