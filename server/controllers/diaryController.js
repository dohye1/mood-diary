import Diary from '../models/Diary';
import User from '../models/User';

export const getDiary = async(req, res)=>{
  const {
    user : {email}
  } = req;
  try{
    const allDiaries = await Diary.find({email});
    return res.status(200).json({diaries : allDiaries, message:''})
  }catch(error){
    console.log(error);
    return res.status(404).json({diaries : [], message:'데이터를 찾을수 없습니다.\n다시 시도해주세요.'});
  } 
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
    return res.status(201).json({  message : '', diary : newDiary})
  } catch (error) {
    console.error(error);
    return res.status(201).json({ message : '다이어리 작성에 실패했습니다\n다시 시도해주세요', diary : {} });
  }
};

export const patchDiary = async(req, res)=>{
   const {
    body: { diaryId, mood, content }
  } = req;
  try {
    const edittedDiary = await Diary.findByIdAndUpdate({_id : diaryId}, {mood, content});
    return res.status(200).json({diary:{...edittedDiary._doc, mood, content}, message : '수정이 완료되었습니다'});  
  } catch (error) {
    console.error(error);
    return res.status(400).json({diary:{...edittedDiary._doc, mood, content}, message : '수정하지 못했습니다\n다시 시도해주세요'});      
  }
}

export const deleteDiary = async(req, res)=>{

}
