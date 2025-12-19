import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
  loop?: boolean;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  strings, 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  pauseTime = 2000,
  loop = true,
  className = "font-mono"
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % strings.length;
      const fullText = strings[i];

      if (!loop && !isDeleting && text === fullText) {
        return; // Stop typing if loop is false
      }

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? deleteSpeed : typeSpeed);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(pauseTime);
        if (loop) setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typeSpeed, deleteSpeed, pauseTime, loop]);

  return (
    <span className={`${className} border-r-2 border-pink-400 pr-1 animate-pulse`}>
      {text}
    </span>
  );
};

export default Typewriter;