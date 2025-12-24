import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import bodyParser from "body-parser";
import route from "./routes/userRoute.js"


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
        .connect(MONGOURL)
        .then(() => {
            console.log("successfully connecte with database");
            app.listen(PORT , () => { 
                console.log(`Server is running on ${PORT}`);
            });
        })
        .catch((error) => console.log(error));



app.use("/api",route);