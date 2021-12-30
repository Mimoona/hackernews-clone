import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo.png'
function Header() {
    return (
      <header>
                <div className="nav-link">
                    <img id="logo" src={Logo} alt="logo" />
                    {/* <a href="#"> LOGIN </a>  */}
                    <a className="hLinks" href="https://www.google.com/">BREAKING </a>
                    <a className="hLinks" href="https://www.google.com/">OL'STUFF </a>
                    <a className="hLinks" href="https://www.google.com/">COMMENTS </a>
                    <a className="hLinks" href="https://www.google.com/">JOBS </a>
                    <a className="hLinks" href="https://www.google.com/">SUBMIT </a>
                    <a className="hLinks" href="https://www.google.com/">LOGIN </a>
                </div>
      </header>
    );
  

}
  
export default Header