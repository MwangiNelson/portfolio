import React, { useState, useEffect } from 'react'
import './crud.css'

function Crud() {

    const [ingredients, setIngredients] = useState([])
    const [list, setList] = useState([])

    function handleChange(e) {
        setIngredients(e.target.value)
    }
    
    function handleSubmit(){
        setList([...list, ingredients])
        console.log(list)
    }

    function deleteItem(e){
        setList(list.filter((item, i) => i!== e.id))
    }
    

    


    return (
        <div className="main_sect">
            <nav className="home-navbar">
                <div className="logo">
                    <h2>RECETTE</h2>
                </div>
            </nav>
            <div className="main-body">
                <div className="recipe-form-wrapper">
                    <div className="header">
                        <h4>Créer une recette</h4>

                    </div>
                    <div className="recipe-form-container">
                        <form action="" className="recipe-form">

                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Recipe title</label>
                                </div>
                                <div className="fillable">
                                    <input type="text" name="name" id="name" placeholder="Recipe title" />
                                </div>
                            </div>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Ingredients</label>
                                </div>
                                <div className="fillable">
                                    <div className="ingredients">
                                        <input type="text" onChange={handleChange} name="name" id="name" placeholder="Recipe title" />
                                        <button className="add-btn" onClick={handleSubmit} type='button'>ADD</button>
                                    </div>
                                    <hr />
                                    <div className="ingredients-list">
                                        {list.map((item, index) => {return <span className="ingredient-item">{item} <button className="ingred-btn" id={index} type='button' onClick={deleteItem}>< i className="fa-solid fa-xmark"></i></button></span>})}
                                    </div>
                                    <hr />
                                </div>


                            </div>
                            <div className="input-field">
                                <div className="label-holder">
                                    <label htmlFor="name">Procedure</label>
                                </div>
                                <div className="fillable">
                                    <textarea name="procedure" id="" rows="7"></textarea>
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