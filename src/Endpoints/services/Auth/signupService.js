import { pool } from "../../config/db.js";
import { generatePassword } from "../../utils/generatePassword.js";
import bcrypt from "bcrypt";

const SignupService = async (req, res) => {
  const client = await pool.connecct();

  try {
    const { fullName, email, password, confirmPassword, registerAs } = req.body;
    console.log(req.body);

    if (!fullName || !email || !password || !confirmPassword || !registerAs) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const emailExists = await pool.query(
      "SELECT * FROM farmers WHERE email = $1",
      [email],
    );
    if (emailExists.rows.length != 0) {
      console.log(emailExists);
      return res.status(400).json({
        message: "Farmer already exists",
      });
    }

    await client.query("BEGIN");
  } catch (error) {}
};
