import { pool } from "../../config/db.js";
import { generatePassword } from "../../utils/generatePassword.js";
import bcrypt from "bcrypt";
import { errorResponse } from "../../utils/responseHandler.js";

const SignupService = async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, password } = req.body;
    console.log(req.body);

    if (!first_name || !last_name || !email || !phone_number || !password) {
      return errorResponse(res, 400, "All fields are required");
    }

    const emailExists = await pool.query("SEL")
  } catch (error) {}
};

export default SignupService;
