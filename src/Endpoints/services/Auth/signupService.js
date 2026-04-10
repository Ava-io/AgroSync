import { pool } from "../../config/db.js";
import { generatePassword } from "../../utils/generatePassword.js";
import bcrypt from "bcrypt";
import { errorResponse, successResponse } from "../../utils/responseHandler.js";
import { log } from "node:console";

const SignupService = async (req, res) => {
  const client = await pool.connect();

  try {
    const { first_name, last_name, email, phone_number } = req.body;
    console.log(req.body);

    if (!first_name || !last_name || !email || !phone_number) {
      return errorResponse(res, 400, "All fields are required");
    }

    const emailExists = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email],
    );

    if (emailExists.rows.length != 0) {
      console.log(emailExists);
      return errorResponse(res, 400, "Email already exists");
    }

    // creating farm query
    const createFarmQuery = `
INSERT INTO farms (name, address)
VALUES($1, $2)
RETURNING *
`;

    const farmResult = await client.query(createFarmQuery, [name, address]);

    console.log(farmResult);
    const farmId = farmResult.rows[0];
    const farmInfo = farmResult.rows;
    console.log(farmInfo);

    const password = generatePassword(name);
    const role = "admin";

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.warn("this is user password", password);

    // create user query
    const createUserQuery = `
    INSERT INTO users( first_name, last_name, email, phone_number, password, farm_id, role )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
    `;

    console.log(farmId, "farm_id");
    console.log(email);

    const userResult = await client.query(createUserQuery, [
      id,
      first_name,
      last_name,
      email,
      phone_number,
      hashedPassword,
      farmId,
      role,
    ]);

    console.log(userResult);

    const admin = userResult.rows[0];
    console.log(admin);

    return successResponse(res, 201, "Signup Successful", userResult.rows);
  } catch (error) {
    console.log(error);
    return errorResponse(res, 500, "Signup Failed");
  }
};

export default SignupService;
