import CopyButton from './CopyButton';

interface PromptCardProps {
  prompt: string;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  return (
    <div className="prompt-card bg-gray-50 p-3 rounded-md flex justify-between items-center mt-4">
      <code className="text-sm text-gray-800 mr-3">{prompt}</code>
      <CopyButton 
        text={prompt}
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-sm font-semibold py-1 px-3 rounded flex-shrink-0"
        successMessage="Prompt copied!"
      />
    </div>
  );
}