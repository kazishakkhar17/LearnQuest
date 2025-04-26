import express from "express";
import { getQuestion, addQuestion } from "../controller/question.controller.js"; // Importing controller functions

const router = express.Router();

// Route to get all questions
router.get("/", getQuestion);

// Route to add a new question
router.post("/", addQuestion);

export default router;
