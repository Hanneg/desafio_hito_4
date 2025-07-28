import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email == '' || password == '') {
            alert('Todos los campos son obligatorios')
        } else if (password.length < 6 ) {
            alert('El password debe tener mínimo 6 caracteres')
        } else {
            alert('Autenticación exitosa')
        }
    }

  return (
    <Form style={{padding: '16rem'}}>
        <h1>Login</h1>
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <input style={{padding: '0.5rem'}} type='email' placeholder='Ingresa tu correo'
            onChange={(e) => setEmail(e.target.value)}
        />
        </Form.Group>
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <input style={{padding: '0.5rem'}} type='password' placeholder='Ingresa tu contraseña'
            onChange={(e) => setPassword(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
    </Form>
  )
}

export default Login