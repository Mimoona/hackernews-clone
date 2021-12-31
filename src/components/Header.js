import React from 'react'
import Logo from './R1Logo.png'
import "./Header.css"

function Header({inputQuery, setInputQuery, handleSubmit}) {
  return (
    <header>
    {/* <header style={{backgroundImage: `url(${Logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}> */}
      <nav class="navbar navbar-expand-lg navbar-custom ">
        <a class="navbar-brand" href="#">
          <img src={Logo} height="80vh"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>  
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Breaking News <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Old Stuff</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Jobs</a>
            </li>
          </ul>
      <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
        <input class="form-control mr-sm-2" type="search" placeholder="Ask me... " value={inputQuery} onChange={e => setInputQuery(e.target.value)}/>
        <button class="btn btn-light my-2 my-sm-0" type="submit"><i class="fa fa-search"></i> </button>
      </form>
      </div>
    </nav>
  </header>
  )
}
  
export default Header