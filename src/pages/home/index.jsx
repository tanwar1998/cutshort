import React, { useState } from "react";
import { HomeContainer } from './style.js';
import Icon from '../../assets//image/logo.png';
import WelcomeComponent from './components/welcome.jsx';
import WorkspaceComponent from './components/workspace.jsx';
import LaunchComponent from './components/launch.jsx';
import PlanningComponent from './components/planing.jsx';

const NavItem = [
    {
        key: 'welcome',
        value: 1,
        label: 1
    },
    {
        key: 'workspace',
        value: 3,
        label: 2
    },
    {
        key: 'planning',
        value: 5,
        label: 3
    },
    {
        key: 'launching',
        value: 6,
        label: 4
    },
]


const Component = () => {
    const [currentComponent, setCurrentComponent] = useState(NavItem[0]);


    


    return (
        <HomeContainer className="hor-row">
            <div className="hor-row nav-bar-container">
                <div className="hor-row nav-bar-heading">
                    <img src={Icon} alt="icon"/>
                    Eden
                </div>
                <div className="hor-row nav-icon-container">
                    <div className="hor-row basic-line">
                        
                    </div>
                    <div className="hor-row active-line" 
                       style={{width: (currentComponent.value * 10 * (10/6)) + '%'}} >
                        
                    </div>
                    <div className="hor-row nav-icon-main">
                        {NavItem.map((item, i)=>(
                            <span className={item.value <= currentComponent.value ? 'selected-span' : ''} 
                                key = {'nav'+i}
                                style = {{marginLeft: i===0? '-7px' : '0'}}
                                onClick = {()=>{
                                    setCurrentComponent(item)
                                }} >
                                { item.label }
                            </span>
                        ))}
                    </div>
                </div>
                    
            </div>
            {/* <div className="hor-row container-main"> */}
                {currentComponent.key === 'welcome' && <WelcomeComponent
                />}
                {currentComponent.key === 'workspace' && <WorkspaceComponent
                />}
                {currentComponent.key === 'planning' && <PlanningComponent
                />}
                {currentComponent.key === 'launching' && <LaunchComponent/>}
            {/* </div> */}
        </HomeContainer>
    )
}

export default Component;