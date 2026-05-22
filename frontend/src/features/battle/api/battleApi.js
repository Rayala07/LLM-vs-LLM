import axios from "axios";

export const runBattle = async (prompt) => {
  try {
    const response = await axios.post("/api/battle", { prompt });
    return response.data.result;
  } catch (error) {
    console.error("Battle API Error:", error);
    throw error;
  }
};
