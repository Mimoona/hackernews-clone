import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';


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
              {item.hits.map(eachObj => {
                return(
                <div>
                <h1>{eachObj.title}</h1>
                {/* <h1>{eachObj.author}</h1> */}
                </div>
               )})}
            </div>
          )
        
          : <h1>Wait, It's loading.....</h1>
        }
    </div>
     
  );
}

export default App;
