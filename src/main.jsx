import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* function Amit() {
    return (
        <p>Amit Saini</p>
    )
} */
const Oelement = "Coding with Amit"
const Reactelement = React.createElement(
    'h1',
    {},
    'This is a Link',
    Oelement
) 

/* const Reactelement = (
    <a href="https://google.com" target="_blank" >Click </a>
) */


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <App />
  
)
