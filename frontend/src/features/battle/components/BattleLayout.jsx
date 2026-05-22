import { useState } from "react";
import PromptInput from "./PromptInput";
import Arena from "./Arena";
import JudgeResult from "./JudgeResult";
import { runBattle } from "../api/battleApi";

export default function BattleLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const [resultData, setResultData] = useState(null);

  const handlePromptSubmit = async (prompt) => {
    setIsLoading(true);
    setResultData(null);
    try {
      const data = await runBattle(prompt);
      setResultData(data);
    } catch (error) {
      console.error("Failed to run battle", error);
      alert("Failed to get response. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col pt-12 px-8">
      <header className="text-center mb-8">
        <h1 className="text-5xl tracking-widest font-light uppercase mb-2">Battle LLM</h1>
        <p className="text-white/50 tracking-widest text-sm uppercase">Mistral vs Cohere — Evaluated by Gemini</p>
      </header>

      <main className="flex-1">
        <PromptInput onSubmit={handlePromptSubmit} isLoading={isLoading} />
        
        <Arena 
          solution1={resultData?.solution_1} 
          solution2={resultData?.solution_2} 
        />
        
        {resultData?.judge && (
          <JudgeResult judgeData={resultData.judge} />
        )}
      </main>
    </div>
  );
}
