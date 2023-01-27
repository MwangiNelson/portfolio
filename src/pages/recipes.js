import React,{useEffect,useState} from 'react'

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
    return (
        <div className="recipe-holder">
            <div className="header">
                <h2>ALL RECIPES</h2>
            </div>
            <div className="recipe-container">
                
            </div>
        </div>
    )
}

export default Recipes