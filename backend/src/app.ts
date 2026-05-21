import express from "express";
import runGraph from "./services/graph.ai.js";

const app = express();

app.get("/", async (req, res) => {
  const result = await runGraph(
    "Write a code for finding middle node in a Singly Linked List in js.",
  );

  res.status(200).json({
    result,
  });
});

export default app;
