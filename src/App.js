import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
//import mapTime from './components/mapTime';

import Hits from "./components/Hits";
import Pagination from "./components/Pagination";

function App() {

  const[hits, setHits] = useState([])
  const[loading, setLoading]= useState(false)
  const[querie, setQuerie] = useState('')
  const[search, setSearch] = useState('')
  const[currentPage, setCurrentPage]= useState(1)
  const[hitsPerPage]= useState(10);



//add hitsPerPage to your Url 
  //const URL = `http://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=${hitsPerPage}`
  //const URL = `https://hn.algolia.com/api/v1/search?query=${search}&page=${currentPage}&hitsPerPage=${hitsPerPage}`
  const URL = `http://hn.algolia.com/api/v1/search?query=${search}`
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(URL)
        .then((res) => {
          setHits(res.data.hits)
          console.log(hits)
          setLoading(true);
        })
        .catch((err) =>
          alert(`${err} ... Please try again`)
      );
    };
    fetchData();
  },[search])


  // to get the current hits
  const indexOfLastHit = currentPage * hitsPerPage;
  const indexOfFirstHit = indexOfLastHit - hitsPerPage;
  const currentHits = hits.slice(indexOfFirstHit, indexOfLastHit);

   // Changing the page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }
  return (
    <div className='container mt-5' >
      <h1 className= "text-primary mb-3 mt-3">Hacker News</h1>
        <form onSubmit={handleSubmit}>
          <input value={querie} onChange={e => setQuerie(e.target.value)}/>
          <button type='submit'>
            Search
          </button>
        </form>
      <Hits currentHits={currentHits} loading={loading}/>
      <Pagination
          hitsPerPage = {hitsPerPage}
          paginate = {paginate}
          totalHits = {hits.length}

        />
        {/* <Pagination hitsPerPage={hitsPerPage} totalHits={hits.length}/> */}
    </div>
  );
}

export default App