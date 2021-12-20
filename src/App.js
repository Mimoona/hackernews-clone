import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
//import _ from "lodash";
//import PaginationItems from './components/PaginationItems'
import ReactPaginate from "react-paginate"
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
  
  const[items, setItems] = useState([])
  const[loading, setLoading]= useState(false)
  const [querie, setQuerie] = useState('')
  const [search, setSearch] = useState('')
  const[pageCount,setPageCount]=useState(0)
  let currentPage = 1;
  const itemsPerPage = 10
  
  const URL = `http://hn.algolia.com/api/v1/search?query=${search}&page=${currentPage}&hitsPerPage=${itemsPerPage}`
  //const pageSize = 5;
  // const [paginatedItems, setPaginatedItems] = useState()
  

  useEffect(() => {
   
    fetchData()
  }, [search])
  
  const fetchData = () => {
    axios.get(URL)
   .then(res =>{
     setItems(res.data)
     // setPaginatedItems(_(items).slice(0).take(pageSize).value())
     setPageCount(Math.ceil(items.length/itemsPerPage))
     setLoading(true)
   })
   .catch(err => console.log(err))
 }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

  const handlePageClick = (items) => {
    console.log(items.selected)
  
  }
  
console.log(items)
  return (
    <div >
      <Header />
      <br></br>
        <form style={{justify:"center"}} class="search" onSubmit={handleSubmit}>
          <input value={querie} onChange={e => setQuerie(e.target.value)}/>
          <button type='submit'>
            Search
          </button>
        </form>
        {loading ? (
            <div>

            <ol >
                {items.hits.map(hit => {
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
      onPageChange={handlePageClick}
      containerClassName={"pagination justify-content-center"}
      pageClassName={"page-item"}
      pageLinkClassName= {"page-link"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      breakLinkClassName={"page-Link"}
      activeClassName={"onPageActive"}
      
      />
      
      {/* <Footer/> */}
     
    </div>
     
  );
}

export default App