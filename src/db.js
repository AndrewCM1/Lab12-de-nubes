import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "database-1.cwbis7fllnjx.us-east-2.rds.amazonaws.com",
  user: "root",
  password: "",
  port: 3306,
  database: "customersdb",
});
