import './App.css';
import React, { useEffect, useState } from 'react'
import Crud from './crud';
import Recipes from './pages/recipes';
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


  const [toggle, setToggle] = useState(true)


  return (
    <section className="main-body">
      <nav className="home-navbar">
        <div className="logo">
          <h2>RECETTE</h2>
        </div>
      </nav>
      <div className="nav-btn-holder">
        <button className="btn-navigate" onClick={() => { setToggle(!toggle) }}>{toggle ? 'View all recipes' : 'Add a Recipe'}</button>
      </div>
      {toggle ? <Crud /> : <Recipes />}

    </section>
  );
}

export default App;
