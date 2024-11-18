import React, { useEffect, useRef } from 'react'; 

interface CommandShellProps {
    shellPrompts: JSX.Element[];
}; 

const CommandShellComponent: React.FC<CommandShellProps> = React.memo(({shellPrompts}) => {
    
    const shellRef = useRef<HTMLDivElement>(null); 

    useEffect(() => {

      // First scroll
      const firstScroll = setTimeout(() => {
        if (shellRef.current) {
          shellRef.current.scrollTop = shellRef.current.scrollHeight;
        }
      }, 2000); // Delay before the first scroll

      // Second scroll
      const secondScroll = setTimeout(() => {
        if (shellRef.current) {
          shellRef.current.scrollTop = shellRef.current.scrollHeight;
        }
      }, 5000); // Delay before the second scroll (after the first)

      return () => {
        clearTimeout(firstScroll); 
        clearTimeout(secondScroll); 
      }; 

    }, [shellPrompts]);
  
    return (
      <div className="command-shell" ref={shellRef}>
          {shellPrompts}
      </div>
    ); 

  });

  export default CommandShellComponent; 