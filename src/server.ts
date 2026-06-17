import app from "./app";
require('dotenv').config();
import connectDB from "./config/db";

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});