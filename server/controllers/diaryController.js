import Diary from '../models/Diary';
import User from '../models/User';

export const getDiary = async(req, res)=>{
  const {
    user : {email}
  } = req;
  try{
    const allDiaries = await Diary.findOne({email});
    return res.status(200).json({diaries : allDiaries, message:''})
  }catch(error){
    console.log(error);
    return res.status(404).json({diaries : [], message:'데이터를 찾을수 없습니다.\n다시 시도해주세요.'});
  } 
}

export const patchDiary = async(req, res)=>{
  /*const {
    body: { date, mood, content },
    session: { displayName }
  } = req;
  console.log(date, mood, content, displayName);
  const splitedDate = date.split('-');
  const year = splitedDate[0];
  const month = parseInt(splitedDate[1]);
  const day = parseInt(splitedDate[2]);
  try {
    const sql = `update diary set mood="${mood}", content="${content}" where post_year=${year} and post_month=${month} and post_day=${day} and email="${displayName}"`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        console.error(error);
        return res.send({ diaryUpload: false });
      }
      console.log(result);
      return res.send({ diaryUpload: true });
    });
  } catch (error) {
    console.error(error);
    return res.send({ diaryUpload: false });
  }*/
}

export const deleteDiary = async(req, res)=>{

}

export const postDiary = async (req, res) => {
  const {
    body: { date, mood, content },
    user : { _id , email, diaries}
  } = req;
  const splitedDate = date.split('-');
  const post_year = splitedDate[0];
  const post_month = splitedDate[1];
  const post_day = splitedDate[2];
  try {
    const newDiary = await Diary.create({ email, mood, content, post_day, post_month, post_year });
    await User.findByIdAndUpdate({_id}, {diaries : [...diaries, newDiary._id]});
    return res.status(201).json({ createDiary :true, error: false, message : '', diary : newDiary})
  } catch (error) {
    console.error(error);
    return res.status(201).json({ createDiary :false, error: true, message : '다이어리 작성에 실패했습니다\n다시 시도해주세요', diary : {} });
  }
};

export const getCount = async (req, res) => {
  /*const {
    body: { date, type },
    session: { displayName }
  } = req;
  const fullDate = date.split('-');
  const year = parseInt(fullDate[0]);
  const month = parseInt(fullDate[1]);
  let sql;
  try {
    if (type > 12) {
      //year의 데이터를 찾아와야함
      sql = `select mood, count(mood) as moodCnt from diary where post_year=${year} and email="${displayName}" group by mood`;
      dbConnection.query(sql, (error, result) => {
        if (error) {
          console.error(error);
        }
        return res.send({ result });
      });
    } else {
      //month의 데이터를 찾아와야함
      sql = `select mood, count(mood) as moodCnt from diary where post_year=${year} and post_month=${month} and email="${displayName}" group by mood`;
      dbConnection.query(sql, (error, result) => {
        if (error) {
          console.error(error);
        }
        return res.send({ result });
      });
    }
  } catch (error) {
    console.error(error);
  }*/
};
