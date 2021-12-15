import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [querie, setQuerie] = useState('')
  const [search, setSearch] = useState('')

  const URL = `http://hn.algolia.com/api/v1/search?query=`

 
  const fetchData = () => {
    axios
      .get(URL)
      .then((res) => {
        setData(res.data)
        setLoading(true)
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

  useEffect(() => {
    fetchData();
  }, [search]); 


  return (
    <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <input value={querie} onChange={e => setQuerie(e.target.value)} />
          <button type='submit'>
            Search
          </button>
        </form>
          {loading ? (
            <div>
              {
                data.hits
                  // .filter(e => e.title.includes(querie))
                  .map(hit => {
                    return 
                    <>
                     <ol>
                        <li>
                             <h1>{hit.title}</h1>
                        </li>
                    </ol>
                    </>
                   
                })
              }
            <h1>{data.hits.title}</h1>
        
            </div>
          )
        
          : <h1>Loading...</h1>
        }
    </div>
  );
};

export default App;