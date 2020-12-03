import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
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

app.use(routes.apiDiary, diaryRouter);
app.use(routes.apiUser, userRouter);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
