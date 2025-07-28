import React from 'react';
import { useEffect, useState } from "react";
// import { pizzas } from '../assets/js/pizzas.js';
import '../App.css';
import CardPizza from './CardPizza.jsx';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  // Consumo de la API
  const url = "http://localhost:5000/api/pizzas";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
        getData();
  }, []);

  return (
    <div className='galeria'>
      {
        pizzas.map( (pizza) => {
          return <CardPizza 
                  key={pizza.id}
                  name={pizza.name}
                  desc={pizza.desc} 
                  price={pizza.price} 
                  ingredients={
                    pizza.ingredients.map((ingredient) => <li>{ingredient}</li>)
                  } 
                  img={pizza.img}></CardPizza>
        })
      }
    </div>
  )
}

export default Home