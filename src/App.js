import './App.css';
import React, { useEffect, useState } from 'react'
import Crud from './crud';
import axios from 'axios'

function App() {
  // const axios = require("axios");
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')

  //fetch random data
  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + search)
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data.meals);
      }).catch(function (error) {
        console.error(error);
      });
  }, [])


  //fetch from db


  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    // <div className='App'>
    //   <div className="search-bar">
    //     <input type="text" value={search} onInput={handleChange}/>
    //     <button className="btn-search"><i className="fa-brands fa-searchengin"></i> SEARCH</button>
    //   </div>
    //   <h2 className="header">RECIPES</h2>
    //   <div className="data-container">

    //     {posts.map(data => <div className='card' ><p key={data.strMeal} className='data'>{data.strMeal}</p> <hr /> <p>{data.strInstructions}</p>
    //     </div>)}
    //   </div>

    // </div>
    <section className="main-body">
      <nav className="home-navbar">
        <div className="logo">
          <h2>RECETTE</h2>
        </div>
      </nav>
      <div className="nav-btn-holder">
        <button className="btn-navigate">View all recipes</button>
      </div>
      <Crud />
    </section>
  );
}

export default App;
