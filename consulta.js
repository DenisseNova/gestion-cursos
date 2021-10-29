const { Pool } = require('pg');
const pool =  new pool ({
  user: 'postgres',
  host: 'localhost',
  password: '',
  database: 'cursos',
  port: 5432,
})



