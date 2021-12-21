import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
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
  // const[page,setPage] = useState(1)
  const [itemOffset, setItemOffset] = useState(0);

 
  const itemsPerPage = 10
  //const URL = `http://hn.algolia.com/api/v1/search?query=${search}&tags=front_page`
  // const URL = `http://hn.algolia.com/api/v1/search?query=${search}&page=2`
  const URL = `http://hn.algolia.com/api/v1/search?query=${search}&hitsPerPage=10`

  const fetchData = () => {
    axios.get(URL)
   .then(res =>{
     setItems(res.data.hits);
     setLoading(true);
   })
   .catch(err => console.log(err))
 }

  useEffect(() => {
      fetchData();
  }, [search])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(querie)
    setQuerie('')
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    //const newOffset = event.selected + 1
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  
console.log(items)
  return (
    <div >
      <Header />
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
                {items && items
                // .slice((page - 1) * itemsPerPage, page * itemsPerPage)
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
      marginPagesDisplayed={5}
      onPageChange={handlePageClick}
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

export default App