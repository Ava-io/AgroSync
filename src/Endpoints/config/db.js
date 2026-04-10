import dotnev from "dotenv";
import pg from "pg";
import { createUserTable } from "../model/CreateUsersTable.js";
import { createFarmTable } from "../model/CreateFarmTable.js";

dotnev.config();

console.log(process.env.DB_PORT);

export const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

export const initDb = async () => {
  try {
    const client = await pool.connect();

    await client.query(createFarmTable);
    console.log("Farm table created successfully");

    await client.query(createUserTable);
    console.log("Users table created successfully");


  } catch (error) {
    console.log(error, "Database not connected successfully");
  }
};
