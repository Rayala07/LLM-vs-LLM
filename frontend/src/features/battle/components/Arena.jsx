import SolutionCard from "./SolutionCard";

export default function Arena({ solution1, solution2 }) {
  return (
    <div className="grid grid-cols-2 gap-8 max-w-[1400px] mx-auto min-h-[500px]">
      <div className="flex flex-col">
        <SolutionCard modelName="Mistral" solution={solution1} />
      </div>
      <div className="flex flex-col">
        <SolutionCard modelName="Cohere" solution={solution2} />
      </div>
    </div>
  );
}
