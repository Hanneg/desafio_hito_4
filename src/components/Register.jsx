import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkpassword, setCheckpassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (email == '' || password == '' || checkpassword == '') {
            alert('Todos los campos son obligatorios')
        } else if (password.length < 6 && checkpassword.length < 6 ) {
            alert('El password debe tener mínimo 6 caracteres')
        } else if (password != checkpassword) {
            alert('La contraseña debe coincidir')
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
        <Form.Group className="mb-3 d-flex flex-column" controlId="formBasicPassword">
        <Form.Label>Confirmar contraseña</Form.Label>
        <input style={{padding: '0.5rem'}} type='password' placeholder='Confirma tu contraseña'
            onChange={(e) => setCheckpassword(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
    </Form>
  )
}

export default Register