import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
import mapTime from './components/mapTime';

function App() {
  
  const[item, setItem] = useState([])
  const[loading, setLoading]= useState(false)
  const [querie, setQuerie] = useState('')
  const [search, setSearch] = useState('')
  const URL = `http://hn.algolia.com/api/v1/search?query=${search}`

  useEffect(() => {
    fetchData()
  }, [search])
  
  const fetchData = () => {
     axios.get(URL)
    .then(res =>{
      setItem(res.data)
      setLoading(true)
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

console.log(item)
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
                {item.hits.map(eachObj => {
                return(  <li style={{color: "rgb(251, 149, 53)", opacity: "0.8"}}>

                <div>
                <h1><a className="title" href={eachObj.url}>{eachObj.title}</a></h1>
                <p className='unterTitle'><a href={eachObj.url}>{eachObj.points} points</a></p>
                <p className='unterTitle'><a href={eachObj.url}>by {eachObj.author} </a> </p>
                <p className='unterTitle'><a href={eachObj.url}>{eachObj.num_comments} comments</a></p>
                <p className='unterTitle'><a href={eachObj.url}>{eachObj.created_at} </a></p>
                <p className='unterTitle'><a href={eachObj.url}>{mapTime(eachObj.created_at_i)} </a></p> 
            
                
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