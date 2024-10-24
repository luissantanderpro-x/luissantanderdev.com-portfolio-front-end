import React, {useState} from 'react'; 

import SlowPrint from '../effects/SlowPrint';

interface CommandShellProps {
    shellPrompts: JSX.Element[];
}; 

const CommandShellComponent: React.FC<CommandShellProps> = React.memo(({shellPrompts}) => {
    // const scrollRef = useRef(null); 




    return (
      <div className="command-shell">
          {shellPrompts}
      </div>
    )
  });

  export default CommandShellComponent; 