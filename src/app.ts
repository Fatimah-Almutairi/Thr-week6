import express  from "express";
import router from "./routes/router";
import 'dotenv/config';

const app = express();



app.listen(5000, () => {
    console.log("Server i running on port 5000")
})