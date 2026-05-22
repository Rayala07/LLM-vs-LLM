import express from "express";
import runGraph from "./services/graph.ai.js";

const app = express();
app.use(express.json());

app.post("/api/battle", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    res.status(400).json({ error: "Prompt is required" });
    return;
  }

  try {
    const result = await runGraph(prompt);
    res.status(201).json({ result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default app;
