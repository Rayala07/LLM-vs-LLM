import { useState } from "react";

export default function PromptInput({ onSubmit, isLoading }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;
    onSubmit(prompt);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 mb-16">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter a coding problem or prompt here..."
          className="w-full bg-black text-white border border-white/20 p-6 rounded-none outline-none focus:border-white transition-colors resize-none min-h-[120px] text-lg placeholder:text-white/30"
          disabled={isLoading}
        />
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!prompt.trim() || isLoading}
            className="bg-white text-black px-8 py-3 font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isLoading ? "Processing..." : "Submit Problem"}
          </button>
        </div>
      </form>
    </div>
  );
}
