import express from "express";
import dotenv from "dotenv";
dotenv.config();

import goalRoutes from "./routes/goalRoutes.js"

const port = process.env.PORT || 8000

const app = express();

app.use('/api/goals',goalRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`));
