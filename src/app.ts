import express  from "express";
import router from "./routes/movie.router";
import 'dotenv/config';
import { connectDB } from "./config/db";
import rout from "./routes/user.router";

const app = express();

//config
connectDB();


//midlleware
app.use(express.json());
app.use('/api/v1/movie', router);
app.use('api/v1/user', rout);

app.listen(5000, () => {
    console.log("Server i running on port 5000")
})