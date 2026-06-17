import express from "express";
import cors from "cors";

const app = express();

app.use(cors(
  {
    origin: "https://todo-iota-nine-38.vercel.app",
    credentials: true,
  }
));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
