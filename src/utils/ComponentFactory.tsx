

import { CommandShellPromptComponent } from "../components"

export class ComponentFactory {
    static createComponent(component_type: string, props: any): JSX.Element {
        switch(component_type) {
            case 'shell_prompt': 
            return <CommandShellPromptComponent key={props.shell_key} {...props} />
        }

        return <div></div>
    }
}


