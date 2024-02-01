import express  from "express"; // nodejs framework
import cors from "cors";//middleware for security / to received request only to set sites/origin. 
// import mysql2 from "mysql2"; //liblary for npm and database purpose
import helmet from "helmet"; //middleware for security from attacks
import bycrypt from "bcrypt"

import cookieParser from "cookie-parser"; //cookie purposes




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





// //Make config about your connection
// const pool = mysql2.createPool({    
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'id19452532_scfos',
//     password: process.env.DB_PASSWORD || '09109305761Mac.',
//     database: process.env.DB_NAME || 'id19452532_scfosv3',
//     port: process.env.DB_PORT || 3306,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// })

// // Check Connection
// pool.getConnection((err, connection) => {
//     if (err) {
//       console.error('Error connecting to the database:', err);
//     } else {
//       console.log('Connected to the database!');
//       // Release the connection back to the pool
//       connection.release();
//     }
// });


// const emailChecker = (req) => {

//   return new Promise((resolve, reject) => {
//     pool
//       .promise()
//       .query('SELECT * FROM `admin` WHERE `email` = ?', [req.body.email])
//       .then(([result])=> {
//         resolve(result.length);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   })
// }

// const passwordHash = async (req) => {
//   const password = req.body.password
  
//   const saltRounds = 4;
//   const salt = await bycrypt.genSalt(saltRounds)

//   const hashedPassword = await bycrypt.hash(password, salt);

//   return hashedPassword;
// }






// app.post('/signup', async (req, res) => {

//   try {
//     const emailResult = await emailChecker(req);
//     if(emailResult > 0){
//       res.status(401).json({isEmailUsed: true })
//     }else{

//       const password = await passwordHash(req);
//       const result = await pool.promise().query("INSERT INTO admin (`name`, `email`, `password`) VALUES (?, ?, ?)", [req.body.name, req.body.email, password])

//       const modResult = {...result, isEmailUsed: false}

//       res.json(modResult)
//     }
    
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// })














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

process.on('SIGINT', () => {
  client.close();
  process.exit();
});



import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://vercel-admin-user:iK0FaSM7H6EzlkyF@cluster0.npib522.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    db = client.db("Portfolio");
    
    await db.command({ ping: 1 });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    startServer();

  } catch (error) {
    await client.close();
    console.error('Error connecting to MongoDB:', error);
  }

}


function startServer() {

  const users = db.collection('Users');

  const emailChecker = async (req, res) => {
    const emailData = req.body.email
    
    console.log(emailData)
    try {
      const result = await users.findOne({email: emailData});
      if(result){
        console.log(`Email Exist ${emailData}`)
        return true;
      }else{
        console.log(`Email doesn't exist ${emailData}`)
      
        return false;
      }
      
    } catch (error) {
      console.error(error);
      console.error('Catch Email');
      res.status(500).json({ message: 'Internal Server Error' });
    }

  }


  

  app.post('/signup', async (req, res) => {
    const newData = req.body;
    console.log(newData);

    const emailIsUsed = await emailChecker(req);

    if(emailIsUsed){

        return res.json({message: 'Email Already Exist'});

    }else{

      
        try {
          const result = await users.insertOne(newData);
          console.log('Inserted document:', result.insertedId);
          res.json({response:{message: 'User created successfully', result: result}});
          
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal Server Error' });
        } 

    }

  });

  // Add more routes or configurations here as needed
}









run().catch(console.dir);






  
