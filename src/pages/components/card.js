import './components.css'

const ContentCard = (props) => {
    let splitProcedures = props.description.split('.')

  return (
    <div className="content-card">
        <div className="content-header">
            <h2>{props.title}</h2>
        </div>
        <div className="content-ingredients">
            {props.ingredients.map((ingredient)=>{return <span>{ingredient}</span>})}
        </div>
        <div className="content-procedure">
            <h4>Procedure</h4>
            <ul>
            {splitProcedures.map((procedure)=>{return <li>{procedure}</li>})}
            </ul>
            
        </div>
        <div className="content-owner">
            <p>by {props.author}</p>
        </div>
    </div>
  )
}

export default ContentCard