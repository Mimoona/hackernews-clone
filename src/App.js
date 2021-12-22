import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
import mapTime from './components/mapTime';

function App() {
  
  const[hits, setHits] = useState([])
  const[loading, setLoading]= useState(false)
  const [querie, setQuerie] = useState('')
  const [search, setSearch] = useState('')
  const[currentPage, setCurrentPage]= useState(1)
  const[hitsPerPage, setHitsPerPage]= useState(10)




  const URL = `http://hn.algolia.com/api/v1/search?query=${search}`

  useEffect(() => {
    const fetchData = async (URL) => {
      await axios
        .get(URL)
        .then((res) => {
          setHits(res.data.hits)
          setLoading(true);
        })
        .catch((err) =>
          alert(`Results:${err} ... Please try again`)
      );
  };












  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

console.log(hits)
  return (
    <div >
        <form onSubmit={handleSubmit}>
          <input value={querie} onChange={e => setQuerie(e.target.value)}/>
          <button type='submit'>
            Search
          </button>
        </form>
        {loading ? (
            <div>

            <ol >
                {hits.map(hit => {
                return(  <li style={{color: "rgb(251, 149, 53)", opacity: "0.8"}}>

                <div>
                <h1><a className="title" href={hit.url}>{hit.title}</a></h1>
                <p className='unterTitle'><a href={hit.url}>{hit.points} points</a></p>
                <p className='unterTitle'><a href={hit.url}>by {hit.author} </a> </p>
                <p className='unterTitle'><a href={hit.url}>{hit.num_comments} comments</a></p>
                <p className='unterTitle'><a href={hit.url}>{hit.created_at} </a></p>
                <p className='unterTitle'><a href={hit.url}>{mapTime(hit.created_at_i)} </a></p> 
            
                
                </div> 
                </li>
               )})} 
             </ol>
            </div>
          )

        
          : <h1>Wait, It's loading.....</h1>
        }
    </div>
     
  );
}

export default App;