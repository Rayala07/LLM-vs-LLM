import express from "express";
import useGraph from "./services/graph.ai.service.js";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Working.",
  });
});

app.post("/use_graph", async (req,res) => {
  await useGraph("What is the capital of France ?")
})

export default app;
