import React from 'react'
import './Spinner.css'

function Spinner() {
    return (
        <div class="spin-container">
            <div class="spin" id="loader"></div>
            <div class="spin" id="loader2"></div>
            <div class="spin" id="loader3"></div>
            <div class="spin" id="loader4"></div>
            <span id="text">LOADING...</span>
            
        </div>
    )
}

export default Spinner
