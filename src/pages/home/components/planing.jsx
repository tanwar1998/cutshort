import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import ButtonComponent from '../../../components/Button/index.jsx';

const Component = () => {
    const [currentComponent, setCurrentComponent] = useState(null);

    return (
        <div className="hor-row planning-container-main">
            <h2>
                How are you planning to use Eden?
            </h2>
            <h4>
                We'll streamline your setup experience accordingly.
            </h4>

            <div className="hor-row container-main">
                <div className="planning-block-container">
                    <div className={"hor-row planning-block" + ( currentComponent === 1 ? ' selected-planning-block': '')}
                        onClick={()=>setCurrentComponent(1)}>
                        <div className="hor-row icon">
                            <PersonIcon className = 'icon' />
                        </div>
                        <div className="planing-heading">
                            For myself
                        </div>
                        <div className="hor-row sub-heading">
                            Write better. Think more clearly. Stay organized
                        </div>
                    </div>
                    
                    <div className={"hor-row planning-block" + ( currentComponent === 2 ? ' selected-planning-block': '')}
                        onClick={()=>setCurrentComponent(2)}
                    
                    >
                        <div className="hor-row icon">
                            <GroupIcon className = 'icon' />
                        </div>
                        <div className="planing-heading">
                            With my team
                        </div>
                        <div className="hor-row sub-heading">
                            {'Wikies, docs, task & projects, all in one place'}
                        </div>
                    </div>
                </div>
                <div className="hor-row">
                    <ButtonComponent
                        label = 'Create Workspace'
                    />
                </div>
            </div>
        </div>
    )
}

export default Component;