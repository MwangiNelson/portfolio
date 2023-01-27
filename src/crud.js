import { query, collection, onSnapshot, addDoc } from 'firebase/firestore'
import React, { useState, useEffect, useRef } from 'react'
import './crud.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from './firebase'

function Crud() {

    var [ingredients, setIngredients] = useState([])
    var [list, setList] = useState([])

    var [name, setName] = useState('')
    var [title, setTitle] = useState('')
    var [procedure, setProcedure] = useState('')
    var data = useRef({})


    const collectData = () => {
        data.name = name
        data.title = title
        data.ingredients = list
        data.procedure = procedure
    }
    const storeData = async () => {
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
    }


    const createRecipe = (e) => {
        e.preventDefault(e)


        const validated = (obj) => {
            for (let i in obj) {
                if (obj[i] === "" || obj[i].length == 0) {
                    toast.warn(`Please fill in the ${i} fields`, {
                        position: "top-center",
                        autoClose: 4000,
                    })
                    return false
                }

            }
            return true
        }

        if (validated(data)) {
            storeData()
        }


    }

    useEffect(() => {
        collectData()
    })

    // console.log(recettes)
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

            <ToastContainer />
            <div className="main-body">
                <div className="recipe-form-wrapper">
                    <div className="header">
                        <h4>CREATE A RECIPE</h4>

                    </div>
                    <div className="recipe-form-container">
                        <form className="recipe-form" onSubmit={createRecipe}>
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
                                    <small style={{ marginBlock: '5px' }}>Your Ingredients will appear here</small>
                                    <div className="ingredients-list" >
                                        {list.map((item, index) => { return <div className="ing"><span className="ingredient-item">{item} <button className="ingred-btn" id={index} type='button' onClick={() => deleteItem(index)}>< i className="fa-solid fa-xmark"></i></button></span></div> })}
                                    </div>

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