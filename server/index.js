import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import routes from './routes';
import authRouter from './routers/authRouter';
import userRouter from './routers/userRouter';
import diaryRouter from './routers/diaryRouter';

import './db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//app.use(express.static(path.join(__dirname, '../client/build')));

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const MySQLStore = require('express-mysql-session')(session);

const options = {
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: 'mood'
};

const sessionStore = new MySQLStore(options);

app.use(cookieParser());
app.use(
  session({
    key: 'connect',
    secret: process.env.SECRET_KEY,
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
);

app.use(routes.apiDiary, diaryRouter);
app.use(routes.apiUser, userRouter);
app.use(routes.apiAuth, authRouter);

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.listen(PORT, () => {
  console.log(`✅ Listening on port: ${PORT}`);
});
