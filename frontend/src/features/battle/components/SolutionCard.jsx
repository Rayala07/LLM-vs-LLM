export default function SolutionCard({ modelName, solution }) {
  return (
    <div className="flex flex-col border border-white/20 h-full">
      <div className="bg-white/5 border-b border-white/20 p-4">
        <h2 className="text-xl font-semibold tracking-wide uppercase">{modelName}</h2>
      </div>
      <div className="p-6 overflow-y-auto max-h-[500px]">
        {solution ? (
          <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-white/90">
            {solution}
          </pre>
        ) : (
          <div className="text-white/40 italic flex items-center justify-center h-full">
            Awaiting prompt...
          </div>
        )}
      </div>
    </div>
  );
}
