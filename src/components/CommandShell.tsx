import React from 'react'; 

interface CommandShellProps {
    shellPrompts: JSX.Element[];
}; 

const CommandShellComponent: React.FC<CommandShellProps> = React.memo(({shellPrompts}) => {
    return (
      <div className="command-shell">
          {shellPrompts}
      </div>
    )
  });

  export default CommandShellComponent; 