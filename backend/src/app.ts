import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Working.",
  });
});

export default app;
