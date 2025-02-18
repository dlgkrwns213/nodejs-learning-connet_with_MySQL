import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

// MySQL 연결 pool 생성
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Promise 기반으로 사용
const db = pool.promise();

export default db;