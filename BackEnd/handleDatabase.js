import express  from "express"; // nodejs framework
import cors from "cors" //middleware for security / to received request only to set sites/origin. 
import mysql2 from "mysql2" //liblary for npm and database purpose
import helmet from "helmet"; //middleware for security from attacks

import cookieParser from "cookie-parser";


const app = express();
const port = 8080;

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

//config your cors
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
    optionsSuccessStatus: 204,
}))

//Make config about your connection
const pool = mysql2.createPool({    
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'auth',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

// Check Connection
pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database!');
      // Release the connection back to the pool
      connection.release();
    }
});














//Check if working
app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

// Error handling for server setup
app.on('error', (err) => {
    console.error('Server error:', err);
});
  
  // Handle unhandled promise rejections (e.g., database connection errors)
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});
