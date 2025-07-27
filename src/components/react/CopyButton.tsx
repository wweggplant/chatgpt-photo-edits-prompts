import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface CopyButtonProps {
  text: string;
  children?: React.ReactNode;
  className?: string;
  successMessage?: string;
  errorMessage?: string;
}

export default function CopyButton({ 
  text, 
  children, 
  className = "bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors",
  successMessage = "Copied to clipboard! ✓",
  errorMessage = "Failed to copy"
}: CopyButtonProps) {
  const [isJustCopied, setIsJustCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(successMessage);
      setIsJustCopied(true);
      
      // 恢复按钮状态
      setTimeout(() => {
        setIsJustCopied(false);
      }, 2000);
    } catch (error) {
      toast.error(errorMessage);
    }
  };

  return (
    <button 
      onClick={handleCopy}
      className={`${className} ${isJustCopied ? 'bg-green-500 hover:bg-green-600' : ''} transition-all duration-200`}
      title="Copy to clipboard"
    >
      {isJustCopied ? '✓ Copied!' : (children || 'Copy')}
    </button>
  );
} 