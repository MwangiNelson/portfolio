import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../firebase';
import './recipes.css'
import { collection, query, onSnapshot } from "firebase/firestore";
import ContentCard from './components/card'
function Recipes() {

    const [recettes, setRecettes] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'recipes'))
        const unsubscribe = onSnapshot(q, snapshot => {
            let recipesArr = []
            snapshot.forEach(doc => {
                recipesArr.push({ ...doc.data(), id: doc.id })
            })

            setRecettes(recipesArr)
        })
      
    }, [])
    console.log(recettes)

    return (
        <div className="recipe-holder">
            <div className="header">
                <h2>ALL RECIPES</h2>
            </div>
            <div className="recipe-container">
                {recettes.map((recipe) => { return <ContentCard title={recipe.title} ingredients={recipe.ingredients} description={recipe.procedure} author={recipe.author} /> })}
            </div>
        </div>
    )
}

export default Recipes