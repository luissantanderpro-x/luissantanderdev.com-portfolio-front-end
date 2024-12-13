import React, {useEffect, useState} from 'react'; 

interface SlowPrintProps {
    msg: string;
    interval: number; 
}; 

// MARK: - Slow Print 

export const SlowPrintComponent: React.FC<SlowPrintProps> = ({msg, interval}) => {
    const [displayWords, setDisplayedWords] = useState('')
    const [wordIndex, setWordIndex] = useState(0) 

    const words = msg.split(' '); 

    useEffect(() => {
      if (wordIndex >= words.length) {
        return;
      }
  
      const timer = setTimeout(() => {
        setDisplayedWords((prevText) => prevText + (prevText ? ' ' : '') + words[wordIndex]);
        setWordIndex((prevIndex) => prevIndex + 1);
      }, interval);
  
      return () => clearTimeout(timer);

    }, [wordIndex, words, interval]);

    return <div>{displayWords}</div> 
};