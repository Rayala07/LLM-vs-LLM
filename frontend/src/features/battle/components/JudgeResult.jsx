export default function JudgeResult({ judgeData }) {
  if (!judgeData) return null;

  return (
    <div className="mt-16 border-t border-white/20 pt-16 mb-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-light tracking-widest uppercase mb-2">Gemini Judge Evaluation</h2>
        <div className="w-16 h-[1px] bg-white mx-auto"></div>
      </div>

      <div className="grid grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="border border-white/20 p-8 flex flex-col items-center">
          <h3 className="text-lg uppercase tracking-wide text-white/60 mb-4">Mistral Score</h3>
          <div className="text-6xl font-light mb-8">{judgeData.solution_1_score} <span className="text-2xl text-white/40">/ 10</span></div>
          <p className="text-white/80 leading-relaxed text-center">
            {judgeData.solution_1_reasoning}
          </p>
        </div>

        <div className="border border-white/20 p-8 flex flex-col items-center">
          <h3 className="text-lg uppercase tracking-wide text-white/60 mb-4">Cohere Score</h3>
          <div className="text-6xl font-light mb-8">{judgeData.solution_2_score} <span className="text-2xl text-white/40">/ 10</span></div>
          <p className="text-white/80 leading-relaxed text-center">
            {judgeData.solution_2_reasoning}
          </p>
        </div>
      </div>
    </div>
  );
}
