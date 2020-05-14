import React, { Component } from 'react';
import ReactHover from 'react-hover'; 
import { CustomCard } from './CustomCard';
import {CardHeader} from '@material-ui/core';


export class Header extends Component {
    render() {
        const optionsCursorTrueWithMargin = {
            followCursor: true,
            shiftX: 120,
            shiftY: -120
        }
        return (
            
            <ReactHover options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type='trigger'>
                    <CardHeader
                        title="Demo title"
                        style={{'textAlign': 'center'}}
                    />
                    {/* <h1>Hover me !</h1> */}
                    {/* <TriggerComponent/> */}
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                {/* <HoverComponent/> */}
                    <CustomCard/>
                    
                </ReactHover.Hover>
                </ReactHover>
           
        )
    }
}

export default Header;
