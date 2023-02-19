const dotenv=require("dotenv").config()
const mysql=require("mysql2")
const connnect=mysql.createConnection(
    {  host: 'localhost',
    user: 'root',
    password: "mysql@444",
    database: 'DoubleDose'
  })
  connnect.connect((error)=>
  {
    if(error)throw error
    console.log("okey")
  }
  )
  module.exports={connnect}
