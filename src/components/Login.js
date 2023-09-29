import { Card, Container, Col, Row, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stateValidations, setStateValidations] = useState({
        email: true,
        password: true
    });

    const verifyPassword = (password) => {
        if(password.length < 6) setStateValidations({...stateValidations, password: false});
        else setStateValidations({...stateValidations, password: true});
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        verifyPassword(e.target.value);
        setPassword(e.target.value)
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        if(!stateValidations.password){
            alert('La contraseña debe tener al menos 6 caracteres');
        }else{
            const response = await fetch('https://my.api.mockaroo.com/users.json?key=2031b1a0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });
            console.log(response);
            if(response.ok) navigate('/home');
            else alert('Usuario o contraseña incorrecta');
        }
    }

    return(
        <Container className='my-5 d-flex justify-content-center'>
            <Col style={{maxWidth: '80%'}}>
                <h3 className='mb-3' style={{textAlign: 'left', fontSize: '1rem'}}>Inicio de sesión</h3>
                <Card style={{borderColor: 'black', borderRadius: '0', background: '#fbf1f1'}}>
                    <Container className='mt-3 mb-4' style={{maxWidth: '50%'}}>
                        <Form style={{textAlign: 'left'}}>
                            <Form.Group controlId='formBasicEmail'>
                                <Form.Label style={{fontWeight: 'bold'}}>Nombre de usuario</Form.Label>
                                <Form.Control className='input' type='email' value={email} onChange={handleEmail} required/>
                            </Form.Group>
                            <Form.Group className='my-2' controlId='formBasicPassword'>
                                <Form.Label style={{fontWeight: 'bold'}}>Contraseña</Form.Label>
                                <Form.Control className='input' isInvalid={!stateValidations.password} type='password' value={password} onChange={handlePassword} required/>
                                <Form.Control.Feedback type='invalid'>
                                    Error de autenticación. Revise sus credenciales
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Button type='submit' onClick={handleSubmit} className='px-5 py-2' style={{borderRadius: '0', background: 'dimgray', borderColor: 'dimgray'}}>
                                        Sign in
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type='reset' onClick={handleSubmit} className='px-5 py-2' style={{borderRadius: '0', background: 'dimgray', borderColor: 'dimgray'}}>
                                        Sign in
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Container>
                </Card>
            </Col>
        </Container>
    );
}

export default Login;