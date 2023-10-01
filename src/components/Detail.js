import React, { useEffect, useState } from 'react';
import { Card, Container, Image } from 'react-bootstrap';
import { FormattedMessage, FormattedDate } from 'react-intl';
import './styles.css'

function Detail({ coffee }){

    const [detail, setDetail] = useState({});

    useEffect(() => {
        if (coffee) {
            fetch(`http://localhost:3001/cafes/${coffee.id}`)
                .then((response) => response.json())
                .then((data) => setDetail(data));
        }
    }, [coffee]);

    if (!coffee) return null;


    return (
    <Container fluid className='d-flex justify-content-center' style={{paddingRight: '6rem', marginLeft: '-2rem'}}>
        <Card style={{width: '90%', borderColor: 'black', borderRadius: '0', background: '#fbf1f1'}}>
            <h5 className='pt-2' style={{textTransform: 'uppercase', fontWeight: 'bold'}}>{detail.nombre}</h5>
            <Card.Body className='m-0 p-0'>
                <p style={{marginTop: '-0.5rem', fontSize: '90%'}}>
                    <FormattedDate
                        value={new Date(detail.fecha_cultivo)}
                        year='numeric'
                        month='long'
                        day='numeric'
                    />
                </p>
                <Image src={detail.imagen} fluid style={{maxHeight: '8rem'}}/>
                <p><FormattedMessage id="Notas" /><br></br>{detail.notas}</p>
                <p style={{fontWeight: 'bold', fontSize: '120%'}}><FormattedMessage id="InfoCultivo" /><br></br>{detail.altura} <FormattedMessage id="msnm" /></p>
            </Card.Body>
        </Card>
    </Container>
    );
};

export default Detail;