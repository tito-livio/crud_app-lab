import express from 'express';
import dotenv from 'dotenv';
import route from './server/routes/router.js';
import morgan from 'morgan';
import path from "path";
import bodyparser from 'body-parser';
import connectDB from './server/database/connection.js';

const app = express();

app.use(express.json());

//set a global variable filename to env engine
dotenv.config({ path: 'config.env' });

//call port from /config.env or call port 3030 if it is not reachable
const PORT = process.env.PORT || 3030;

//log requests
app.use(morgan('tiny'));
//Mongoose Connections
connectDB();

//parser
app.use(bodyparser.urlencoded({ extends: true }));

//set views engine
app.set("view engine", "ejs");

//load assets
app.use("/css", express.static(path.resolve("assets/css")));
app.use('/img', express.static(path.resolve("assets/img")));
app.use('/js', express.static(path.resolve("assets/js")));



app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});