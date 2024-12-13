import React from 'react'; 



import { CommandShellPromptComponentInterface } from '../types';
import { SlowPrintComponent } from './SlowPrintComponent';

export const CommandShellPromptComponent: React.FC<CommandShellPromptComponentInterface> = ({ caller_name, caller_message }) => {
    return (
      <div className='command-shell-item' key='0'>
          <div>{caller_name}: </div>
          <SlowPrintComponent msg={caller_message} interval={400} />
      </div>
    ); 
};

