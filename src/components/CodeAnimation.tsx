import React, { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const CodeAnimation = () => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  const codeLines = [
    'function buildFuture() {',
    '  const vision = "innovation";',
    '  const dedication = "passion";',
    '  return vision + " + " + dedication;',
    '}',
    '',
    '// Building the future... ✨'
  ];

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];
      
      if (currentCharIndex < currentLine.length) {
        // Type characters one by one
        const timer = setTimeout(() => {
          setCurrentText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 50); // Typing speed
        
        return () => clearTimeout(timer);
      } else {
        // Move to next line
        const lineTimer = setTimeout(() => {
          setLines(prev => [...prev, currentText]);
          setCurrentText('');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, 200); // Delay between lines
        
        return () => clearTimeout(lineTimer);
      }
    } else if (currentLineIndex === codeLines.length) {
      // Show result after typing is complete
      const resultTimer = setTimeout(() => setShowResult(true), 500);
      const checkTimer = setTimeout(() => setShowCheck(true), 1000);
      
      return () => {
        clearTimeout(resultTimer);
        clearTimeout(checkTimer);
      };
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="relative max-w-lg mx-auto bg-white/80 rounded-lg p-6 shadow-lg backdrop-blur-sm">
      <pre className="font-mono text-sm md:text-base text-gray-800 whitespace-pre-wrap overflow-hidden min-h-[160px]">
        <code>
          {lines.map((line, index) => (
            <div key={index} className="opacity-100">
              {line}
            </div>
          ))}
          <div className="opacity-100">
            {currentText}
            <span className="animate-pulse">|</span>
          </div>
        </code>
      </pre>
      {showResult && (
        <div className="mt-4 flex items-center gap-2 text-primary font-mono animate-fade-in">
          <span>Future Created Successfully!</span>
          {showCheck && <Check className="h-5 w-5 text-green-500 animate-scale-in" />}
        </div>
      )}
    </div>
  );
};

export default CodeAnimation;
