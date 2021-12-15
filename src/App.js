import React, { useState, useEffect } from 'react'
import './App.css';
//import NewsList from './components/NewsList'
import axios from 'axios';
// import Card from './Card'



// function App() {
//   const URL = `http://hn.algolia.com/api/v1/search?query=`
//   const[item, setItem] = useState([])
//   const[loading, setLoading]= useState(false)

//   useEffect(() => {
//     fetchData()
//   }, [])
  
//   const fetchData = () => {
//      axios.get(URL)
//     .then(res =>{
//       setItem(res.data)
//       setLoading(true)
//     })
//     .catch(err => console.log(err))
//   }

// console.log(item)
//   return (
//     <div >
//         <form >
//           <input/>
//           <button type='submit'>
//             Search
//           </button>
//           <Card/>
//         </form>
//           {loading ? (
//             <div>
//             <h1>Search for sth</h1>
//             </div>
//           )
        
//           : <h1>It's loading wait.....</h1>
//         }
//     </div>
     
//   );
// }

// export default App;


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
             <ol> {
                data.hits
                  .map(hit => {
                    return  <>
                       <li>
                            <h1><a href={hit.url}>{hit.title}</a></h1>
                            {/* <p><a href={hit.url}>url</a></p> */}
                            <p>{hit.points} points</p>
                       </li>
                   </>
                  
                })
              }</ol>
            <h1>{data.hits.title}</h1>
        
            </div>
          )
        
          : <h1>Loading...</h1>
        }
    </div>
  );
};

export default App;