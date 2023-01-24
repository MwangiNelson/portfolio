import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // const axios = require("axios");
  const [posts, setPosts] = useState([])

  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: { query: 'italian wedding soup' },
    headers: {
      'X-RapidAPI-Key': '10df58f8ffmshf892425f3111697p11a041jsn4bac382ca30a',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
      setPosts(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])

  return (
    <div className='App'>
      <h2 className="header">DRINKS</h2>
      <div className="data-container">

        {posts.map(data => <div className='card' ><p key={data.title} className='data'>{data.title}</p> <p>{data.instructions}</p>
        </div>)}

      </div>

    </div>
  );
}

export default App;
