import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import userRouter from './routers/userRouter';
import diaryRouter from './routers/diaryRouter';
import './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
//"client/build"는 react의 build파일 경로이다
  app.use(express.static("../client/build"));

//"..client"는 react 프로젝트의 파일 경로, "build"는 react프로젝트 내의 build폴더이다
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.use(routes.apiDiary, diaryRouter);
app.use(routes.apiUser, userRouter);



app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
