import React from 'react';
import { Card, Container, Image } from 'react-bootstrap';

const Detail = ({ coffee }) => {

    if (!coffee) return null;

    console.log(coffee);

    return (
    <Container fluid className='d-flex justify-content-center'>
        <Card style={{minWidth: '70%'}}>
            <h2>{coffee.name}</h2>
            <Card.Body>
                <p>{coffee.date}</p>
                <Image src={coffee.image} fluid/>
                <p>{coffee.description}</p>
                <p>{coffee.zone}</p>
                <p>{coffee.type}</p>
                <p>{coffee.region}</p>
            </Card.Body>
        </Card>
    </Container>
    );
};

export default Detail;