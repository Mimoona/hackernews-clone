import React from 'react';
const Hits = ({hits, loading}) => {
    if (loading){
        return <h2>Loading...</h2>
    }

    return(
        <ul className= "list-group mb-4" >
            {hits.map(hit => (
                <li key={hit.id} className="list-group-item">
                    {hit.title}
                </li>
            ))}
        </ul>
    )
}

export default Hits;