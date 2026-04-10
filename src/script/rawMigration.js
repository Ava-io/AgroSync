import { initDb } from "../Endpoints/config/db.js";
import { pool } from "../Endpoints/config/db.js";

const migrationStarted = async () => {
  // migration started
  console.log("migrationStarted");
  await initDb();
  await pool.end();

  console.log("migrationEnded");
};

migrationStarted();
