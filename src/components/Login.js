import { Card, Container, Col, Row, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './styles.css';

function Login(){

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [auth, setAuth] = useState({
        username: true,
        password: true
    });

    const handleUsername = (e) => {
        setAuth({username: true, password: true});
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setAuth({username: true, password: true});
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({login: username, password})
        });
        if(!response.ok) setAuth({username: false, password: false});
        else navigate('/home');
    }

    return(
        <Container className='my-5 d-flex justify-content-center'>
            <Col style={{maxWidth: '60%'}}>
                <h3 className='mb-3' style={{textAlign: 'left', fontSize: '1.2rem', fontWeight: 'bold'}}><FormattedMessage id="Inicio de sesión" /></h3>
                <Card style={{borderColor: 'black', borderRadius: '0', background: '#fbf1f1'}}>
                    <Container className='mt-3 mb-4' style={{maxWidth: '50%'}}>
                        <Form style={{textAlign: 'left'}}>
                            <Form.Group controlId='formBasicUsername'>
                                <Form.Label style={{fontWeight: 'bold'}}><FormattedMessage id="Nombre de usuario" /></Form.Label>
                                <Form.Control className='input' isInvalid={!auth.username} type='text' value={username} onChange={handleUsername} required/>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='formBasicPassword'>
                                <Form.Label style={{fontWeight: 'bold'}}><FormattedMessage id="Contraseña" /></Form.Label>
                                <Form.Control className='input' isInvalid={!auth.password} type='password' value={password} onChange={handlePassword} required/>
                            </Form.Group>
                            <Row className='py-3 pb-4'>
                                <Col>
                                    <Button type='submit' onClick={handleSubmit} className='px-5 py-2 login-btn'>
                                        <FormattedMessage id="Ingresar" />
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type='reset' className='px-5 py-2 cancel-btn'>
                                        <FormattedMessage id="Cancelar" />
                                    </Button>
                                </Col>
                            </Row>
                            {!auth.password && <p className='feedback'><FormattedMessage id="AuthError" /></p>}
                        </Form>
                    </Container>
                </Card>
            </Col>
        </Container>
    );
}

export default Login;