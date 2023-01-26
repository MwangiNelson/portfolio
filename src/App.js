import './App.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  // const axios = require("axios");
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')


  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s='+search)
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data.meals);
      }).catch(function (error) {
        console.error(error);
      });
  }, [])

  function handleChange (e){
    setSearch(e.target.value);
  }
  return (
    <div className='App'>
      <div className="search-bar">
        <input type="text" value={search} onInput={handleChange}/>
        <button className="btn-search"><i className="fa-brands fa-searchengin"></i> SEARCH</button>
      </div>
      <h2 className="header">RECIPES</h2>
      <div className="data-container">

        {posts.map(data => <div className='card' ><p key={data.strMeal} className='data'>{data.strMeal}</p> <hr /> <p>{data.strInstructions}</p>
        </div>)}
      </div>

    </div>
  );
}

export default App;
