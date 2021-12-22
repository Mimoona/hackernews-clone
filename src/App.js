import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
//import mapTime from './components/mapTime';
import ReactPaginate from 'react-paginate'

function App() {
  
  const[hits, setHits] = useState([])
  const[loading, setLoading]= useState(false)
  const [querie, setQuerie] = useState('')
  const [search, setSearch] = useState('')

  // Declarations for Pagination
  const[pageNumber,setPageNumber]= useState(0)
  const hitsPerPage = 10
  const hitsVisited = pageNumber * hitsPerPage
  const pageCount = Math.ceil(hits.length / hitsPerPage)

  //const URL = `http://hn.algolia.com/api/v1/search?query=${search}&tags=front_page`
  // const URL = `http://hn.algolia.com/api/v1/search?query=${search}&page=2`
  const URL = `http://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=10`

  const fetchData = () => {
    axios
    .get(URL)
    .then(res =>{
      setHits(res.data.hits.slice(0,101));
      setLoading(true);
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
      fetchData();
  }, [search])


  const handlePageChange = ({selected}) => {
    setPageNumber(selected)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

console.log(hits)
return (
  <div >
    {/* <Header /> */}
    <br></br>
      <form style={{textAlign:"center"}} class="search" onSubmit={handleSubmit}>
        <input value={querie} onChange={e => setQuerie(e.target.value)}/>
        <button type='submit'>
          Search
        </button>
      </form>
      {loading ? (
          <div>

          <ol >
              {hits && hits
              .slice(hitsVisited, hitsVisited + hitsPerPage)
              .map(hit => {
              return(  
              <li style={{color: "rgb(251, 149, 53)", opacity: "0.8"}}>
                <div>
                  <h1><a  className="title"  href={hit.url}>{hit.title}</a></h1>
                  <p  className="subHeading" ><a href={hit.url}>{hit.points} points</a> <a href={hit.url}>by {hit.author} </a> <a href={hit.url}>{hit.num_comments} comments</a> <a href={hit.url}>{hit.created_at} </a>
                  </p>
                  {/* <p><a href={eachObj.url}>{mapTime(eachObj.created_at_i)} </a></p>  */}
                </div> 
              </li>
             )})} 
           </ol>
          </div>
        )
        : <h1>Wait, It's loading.....</h1>
      }
    <ReactPaginate
    previousLabel={"previous"}
    nextLabel={"next"}
    breakLabel={"..."}
    pageCount={pageCount}
    marginPagesDisplayed={2}
    onPageChange={handlePageChange}
    containerClassName={"pagination justify-content-center"}
    pageClassName={"page-item"}
    pageLinkClassName= {"page-link"}
    previousClassName= {"page-items"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-Link"}
    activeClassName={"onPageActive"}
    
    />
    
    {/* <Footer/> */}
   
  </div>
   
);
}

export default App;