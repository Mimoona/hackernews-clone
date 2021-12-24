import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import ReactPaginate from 'react-paginate'
import Footer2 from "./components/Footer2"

function App() {
  
  const [hits, setHits] = useState([])
  const [hitsDisplayed, setHitsDisplayed] = useState([])
  const [loading, setLoading] = useState(false)
  const [inputQuery, setInputQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const hitsPerPage = 10

  const fetchData = () => {
    setLoading(true);
    axios
    .get(`http://hn.algolia.com/api/v1/search?query=${submittedQuery}&hitsPerPage=100`)
    .then(res => {
      setHits(res.data.hits.filter(hit => hit.title));
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchData();
  }, [submittedQuery])

  useEffect(() => {
    setPageCount(Math.ceil(hits.length / hitsPerPage));
    setHitsDisplayed(hits.slice(pageNumber, pageNumber + hitsPerPage))
  }, [hits, pageNumber])

  const handlePageChange = ({selected}) => {
    setPageNumber(selected * hitsPerPage);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedQuery(inputQuery)
  }

return (
  <div >
    {/* <Header /> */}
    <br></br>
      <form style={{textAlign:"center"}} class="search" onSubmit={handleSubmit}>
        <input value={inputQuery} onChange={e => setInputQuery(e.target.value)}/>
        <button type='submit'>
          Search
        </button>
      </form>
      {loading ? <h1>Wait, It's loading.....</h1> :(
          <div>
          <ol >
              {hitsDisplayed && hitsDisplayed
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
    pageRangeDisplayed={5}
    previousClassName= {"page-items"}
    previousLinkClassName={"page-link"}
    nextClassName={"page-item"}
    nextLinkClassName={"page-link"}
    breakClassName={"page-item"}
    breakLinkClassName={"page-Link"}
    activeClassName={"onPageActive"}
    
    />
    
     <Footer2/> 
   
  </div>
   
);
}

export default App