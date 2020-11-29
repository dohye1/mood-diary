import { connection } from '../db';
const dbConnection = connection();

export const getDiary = async(req, res)=>{

}

export const patchDiary = async(req, res)=>{

}

export const deleteDiary = async(req, res)=>{

}

export const postDiary = async (req, res) => {
  const {
    body: { date, mood, content },
    session: { displayName }
  } = req;
  const splitedDate = date.split('-');
  const year = splitedDate[0];
  const month = splitedDate[1];
  const day = splitedDate[2];
  try {
    const sql = `insert into diary(email, post_year, post_month, post_day, mood, content) values ("${displayName}", "${year}", "${month}", "${day}", "${mood}", "${content}")`;
    dbConnection.query(sql, (error, result) => {
      if (error) {
        console.error(error);
        return res.send({ diaryUpload: false });
      }
      return res.send({ diaryUpload: true });
    });
  } catch (error) {
    console.error(error);
    return res.send({ diaryUpload: false });
  }
};

export const getCount = async (req, res) => {
  const {
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
  }
};


export const postEdit = (req, res) => {
  const {
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
  }
};
