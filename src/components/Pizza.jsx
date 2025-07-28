import React from 'react';
import '../App.css';
import { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';

const Pizza = () => {
    const [pizza, setPizza] = useState([]);
    
    // Consumo de la API
    const url = "http://localhost:5000/api/pizzas/p001";

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);
    };
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div className="pizza-description">
            <Card className="d-flex flex-row align-items-center" style={{ width: '100%' }}>
                <Card.Img src={pizza.img} alt="Delicious Pizza" />
                <Card.Body>
                    <Card.Title>$ {pizza.price}</Card.Title>
                    <Card.Text style={{ fontWeight: 'bold' }} >Pizza {pizza.name}</Card.Text>
                    <Card.Text>{pizza.desc}</Card.Text>
                    <Card.Text style={{fontSize: '14px', textAlign: 'left'}}>Ingredientes:</Card.Text>
                    {pizza.ingredients?.map((ingredient) => (
                        <ListGroup style={{fontSize: '12px'}}>
                            <ListGroupItem>{ingredient}</ListGroupItem>
                        </ListGroup>
                    ))}
                    <Button variant="primary" type="submit" style={{ marginTop: '1rem', fontSize: '20px'}}>
                        Pedir
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pizza