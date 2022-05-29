import express, { Express } from "express";
const bp = require('body-parser')
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes";


const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors());
app.use(todoRoutes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.2x6ag.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
