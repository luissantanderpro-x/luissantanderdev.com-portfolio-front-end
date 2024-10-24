import React, {useEffect, useState} from 'react'; 

interface SlowPrintProps {
    words: string[];
    interval: number; 
}; 

// MARK: - Slow Print 

const SlowPrint: React.FC<SlowPrintProps> = ({words, interval}) => {
    const [displayWords, setDisplayedWords] = useState('')
    const [wordIndex, setWordIndex] = useState(0) 

    useEffect(() => {
      // If we've displayed all words, stop
      if (wordIndex >= words.length) {
        return;
      }
  
      const timer = setTimeout(() => {
        // Append the current word to the displayedText
        setDisplayedWords((prevText) => prevText + (prevText ? ' ' : '') + words[wordIndex]);
        // Move to the next word
        setWordIndex((prevIndex) => prevIndex + 1);
      }, interval);
  
      return () => clearTimeout(timer); // Clear timeout on component unmount
    }, [wordIndex, words, interval]);

    return <div>{displayWords}</div> 
}

export default SlowPrint; 