import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';



function App() {
  const URL = 'http://hn.algolia.com/api/v1/search?query='
  const[item, setItem] = useState([])
  const[loading, setLoading]= useState(false)

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = () => {
     axios.get(URL)
    .then(res =>{
      setItem(res.data)
      setLoading(true)
    })
    .catch(err => console.log(err))
  }

console.log(item)
  return (
    <div >
        <form >
          <input/>
          <button type='submit'>
            Search
          </button>
        </form>
          {loading ? (
            <div>
            <h1>Search for sth</h1>
            </div>
          )
        
          : <h1>It's loading wait.....</h1>
        }
    </div>
     
  );
}

export default App;
