import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // const axios = require("axios");
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(
        res => {
          console.log(res)
          setPosts(res.data.drinks)
        })
      .catch(err => { console.log(err) })
  }, [])

  return (
    <div className='App'>
      <h2 className="header">DRINKS</h2>
      <div className="data-container">
        
          {posts.map(data => <div className='card' ><p key={data.id} className='data'>{data.strDrink}</p> <img className='image' src={data.strDrinkThumb} alt="" /></div> )}
       
      </div>

    </div>
  );
}

export default App;
