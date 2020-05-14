import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
export class CustomCard extends Component {
    render() {
        // console.log("CustomCard", this.props.header);
        // const title =  this.props.header ? this.props.header.title : "Demo Title";
        const text = this.props.header ? this.props.header.text : "With supporting text below as a natural lead-in to additional content"
        return (
            <div>
               <Card style={{"backgroundColor":"#D2E8EB", "padding": "10px"}}>
                <Card.Header as="h5">Tivia </Card.Header>
                <Card.Body>
                    {/* <Card.Title>Here's an interesting fact about Toss </Card.Title> */}
                    <Card.Text>
                        {text}.
                    </Card.Text>
                    {/* <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text> */}
                </Card.Body>
                </Card> 
            </div>
        )
    }
}

export default CustomCard;
