import React, { useState } from 'react';

interface InteractiveTextProps {
  text: string;
  className?: string;
}

const InteractiveText: React.FC<InteractiveTextProps> = ({ text, className = '' }) => {
  return (
    <span className={`inline-block ${className}`}>
      {text.split(' ').map((word, i) => (
        <React.Fragment key={i}>
          <Word word={word} />
          {i < text.split(' ').length - 1 && ' '}
        </React.Fragment>
      ))}
    </span>
  );
};

const Word: React.FC<{ word: string }> = ({ word }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className={`inline-block transition-all duration-300 cursor-default ${
        isHovered ? 'text-pink-500 -translate-y-1 rotate-2 scale-110 font-bold' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {word}
    </span>
  );
};

export default InteractiveText;