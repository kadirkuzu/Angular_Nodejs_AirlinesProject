import pg from "pg"
import dotenv from "dotenv"
import * as queries from "./queries.js"

dotenv.config()
const database = new pg.Client({
    connectionString:process.env.PG_CONNECTION
});

export const createDatabase = async () => {
    try {
        await database.connect();
        await database.query(queries.createDatase);
        await pool.query(queries.createTables)
        return true;
    } catch (error) {
        return false;
    } finally {
        await database.end();                             
    }
};

const pool = new pg.Pool({
    connectionString:process.env.DB_CONNECTION_STRING
})
export default pool