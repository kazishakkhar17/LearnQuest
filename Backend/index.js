import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import questionRoute from "./route/question.route.js"; // added

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/questions", questionRoute); // added

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
