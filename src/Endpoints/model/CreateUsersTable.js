export const createUserTable = `
CREATE TABLE IF NOT EXISTS users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
password VARCHAR(225) NOT NULL,
farm_id INT REFERENCES farm(id) ON DELETE CASCADE,
role VARCHAR(20) DEFAULT 'farm manager' CHECK (role IN ('admin','agronomist', 'livestock', 'accountant', 'equipment','field worker' )),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
