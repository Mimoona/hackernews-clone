/* eslint-disable react/jsx-no-undef */
import Logo from './Logo.png'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
      <div id="nav-link">
          <div class="header">
              <div class="container-fluid">
                <div class="row justify-content-center">
                  <img id="logo" src={Logo} alt="logo" /> 
                </div>
                <div class="row justify-content-center">
                    <ul class="nav justify-content-center">
                      <li class="nav-item">
                        <a class="nav-link" href="#">BREAKING</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">OL'STUFF</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">COMMENTS</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">JOBS</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">SUBMIT</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#">LOGIN</a>
                      </li>     
                    </ul>
                </div>
            </div>
          </div>
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"crossorigin></script>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
            <script>var Alert = ReactBootstrap.Alert;</script>
      </div>
    );
}

