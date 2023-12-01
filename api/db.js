import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Wapapatoi&4SQL",
  database:"blog"
})