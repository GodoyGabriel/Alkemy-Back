require('dotenv').config();
const { Pool } = require('pg');
const configPG = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

const pool = new Pool(configPG);

module.exports = { pool };
