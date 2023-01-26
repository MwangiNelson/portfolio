import { query, collection, onSnapshot, addDoc } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import './crud.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebase'

function Crud() {

    const [ingredients, setIngredients] = useState([])
    const [list, setList] = useState([])
    const [recettes, setRecettes] = useState([])

    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [procedure, setProcedure] = useState('')
    const [data, setData] = useState({})

    const collectData = () => {
        setData(data.name = name, data.title = title, data.procedure = procedure, data.ingredients = list)
    }

    const createRecipe = async (e) => {
        collectData()
        e.preventDefault(e)
        console.log(data)

        await addDoc(collection(db, 'recipes'), {
            author: data.name,
            procedure: data.procedure,
            ingredients: data.ingredients,
            title: data.title
        })

        toast.success("Recipe created successfully",
            {
                position: "top-center",
                autoClose: 5000,
            })

        // db.collection('recipes').add({
        //     author: data.name,
        //     procedure: data.procedure,
        //     ingredients: data.ingredients,
        //     title: data.title
        // })
    }
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
    function handleChange(e) {
        setIngredients(e.target.value)
    }

    function handleSubmit() {
        setList([...list, ingredients])
        console.log(list)
    }

    function deleteItem(id) {
        setList(list.filter((item, i) => i !== id))
    }

    function showItem(id) {
        console.log(id)
    }




    return (
        <div className="main_sect">
            <nav className="home-navbar">
                <div className="logo">
                    <h2>RECETTE</h2>
                </div>
            </nav>
            <ToastContainer />
            <div className="main-body">
                <div className="recipe-form-wrapper">
                    <div className="header">
                        <h4>Créer une recette</h4>

                    </div>
                    <div className="recipe-form-container">
                        <form action="" className="recipe-form" onSubmit={createRecipe}>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Recipe author</label>
                                </div>
                                <div className="fillable">
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="What is your name?" />
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Recipe title</label>
                                </div>
                                <div className="fillable">
                                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Recipe title" />
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Ingredients</label>
                                </div>
                                <div className="fillable">
                                    <div className="ingredients">
                                        <input type="text" onChange={handleChange} name="name" id="name" placeholder="Add your ingredients here" />
                                        <button className="add-btn" onClick={handleSubmit} type='button'>ADD</button>
                                    </div>
                                    <hr />
                                    <div className="ingredients-list">
                                        {list.map((item, index) => { return <span className="ingredient-item">{item} <button className="ingred-btn" id={index} type='button' onClick={() => deleteItem(index)}>< i className="fa-solid fa-xmark"></i></button></span> })}
                                    </div>
                                    <hr />
                                </div>


                            </div>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Procedure</label>
                                </div>
                                <div className="fillable">
                                    <textarea name="procedure" value={procedure} onChange={(e) => { setProcedure(e.target.value) }} rows="7"></textarea>
                                </div>
                            </div>
                            <div className="submit">
                                <button className='submit-btn' type="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Crud