import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  host: 'localhost',
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: 'mood'
};

export const connection = () => {
  return mysql.createConnection(options);
};

connection().connect(() => console.log('DB is connected....'));

connection().on('error', function(err){
  console.log('db error', err);
})

connection().end();
