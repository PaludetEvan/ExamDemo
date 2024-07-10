import { Pool } from 'pg'
require('dotenv').config()

const pool = new Pool({
     //user: process.env.RDS_USER,
     //host: process.env.RDS_HOSTNAME,
     //database: process.env.RDS_DB_NAME,
     //password:process.env.RDS_PASSWORD,
     //port:process.env.RDS_PORT

    connectionString: process.env.POSTGRES_URL
    
})

module.exports = pool