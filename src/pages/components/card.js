import './components.css'

const ContentCard = (props) => {
    let splitProcedures = props.description.split('.')

    return (
        <div className="content-card">
            <div className="content-header">
                <p className="pre-text">Recipe name:</p>
                <h2>{props.title}</h2>
            </div>
            <div className="content-owner">
                <p className="pre-text">Authored by:</p>
                <p>{props.author}</p>
            </div>
            <div className="content-ing-list">
                <p className="pre-text">Ingredients:</p>
                <div className="content-ingredients">
                    {props.ingredients.map((ingredient) => { return <span>{ingredient}</span> })}
                </div>

            </div>
            <div className="content-procedure">
                <p className="pre-text">Procedures:</p>
                <ul>
                    {splitProcedures.map((procedure) => { return <li>{procedure}</li> })}
                </ul>

            </div>
            <hr />
            <div className="actions">
                <i class="fa-solid fa-bookmark"></i>
                <i class="fa-solid fa-thumbs-up"></i>
            </div>

        </div>
    )
}

export default ContentCard