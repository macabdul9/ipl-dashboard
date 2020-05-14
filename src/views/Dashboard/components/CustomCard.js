import React, { Component } from 'react'
import {Card} from 'react-bootstrap';
export class CustomCard extends Component {
    render() {
        return (
            <div>
               <Card style={{"backgroundColor":"#D2E8EB", "padding": "10px"}}>
                <Card.Header as="h5">Here's an interesting fact about Toss </Card.Header>
                <Card.Body>
                    {/* <Card.Title>Here's an interesting fact about Toss </Card.Title> */}
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
                </Card> 
            </div>
        )
    }
}

export default CustomCard;
