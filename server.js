const express = require('express');
const app = express();

app.listen(3000, )


const { Client } = require('pg');
const fs = require('fs');
var sql = fs.readFileSync('./database/schema.sql').toString();

const client = new Client({
  user: 'postgres',
  password: 'Reximus1234Prime!@#$',
  host: 'localhost',
  port: 5432,
  database: 'atelier_db'
});

client.connect()
.then(() => console.log("Connected to postgres db"))
.then(() => client.query(sql, (err, res) => {
  if(err){
    console.log(err);
    process.exit(1);
  }
  process.exit(0);
  })
)
.catch(() => console.log("Error"))
.finally(() => client.end());