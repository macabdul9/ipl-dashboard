import React, { Component } from 'react';
import ReactHover from 'react-hover'; 
import { CustomCard } from './CustomCard';
import {CardHeader} from '@material-ui/core';


export class Header extends Component {

    
    render() {
        const optionsCursorTrueWithMargin = {
            followCursor: true,
            shiftX: 10,
            shiftY: -120
        }
        const title = this.props.header ? this.props.header.title : "Demo Title"
        // console.log("CustomHeader.js", this.props.header);
        return (
            
            <ReactHover options={optionsCursorTrueWithMargin}>
                <ReactHover.Trigger type='trigger'>
                    <CardHeader
                        title={title}
                        style={{'textAlign': 'center'}}
                    />
                </ReactHover.Trigger>
                <ReactHover.Hover type='hover'>
                    <CustomCard header={this.props.header}/>
                </ReactHover.Hover>
                </ReactHover>
           
        )
    }
}

export default Header;
