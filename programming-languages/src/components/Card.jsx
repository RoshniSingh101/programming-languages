const Card = (props) => {
    return (
        // table data element for each event in the calendar
        <td className={'Card ' +  props.color}>
            {props.image && (
                <img 
                    src={props.image} 
                    alt={`${props.language} logo`} 
                    className="card-logo" 
                />
            )}
            <h5>{props.language}</h5>
            <h6>{props.description}</h6>
            {props.link && (
                <a 
                    href={props.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="doc-button"
                >
                    Docs
                </a>
            )}
        </td>
    )
}

export default Card;