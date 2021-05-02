import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

//components
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Login from "./components/Login.js"
import Submit from "./components/Submit.js"
import List from "./components/List.js"

function App(){
    //stateManagement for the navigation
    const [page, setPage] = useState("login")


    return(
        <div className="App">
            <Header logo={logo} altText={"logo"} className="Banana" setPage={setPage} />  
            <div className="content">
                {/* {page === "login" ? <Login handleClick={manageLogin} /> : page === "list" ? <Home data={data} /> : <Submit handleClick={postData} />} */}
                {page === "login" ? <Login /> : page === "list" ? <Home /> : <Submit  />}
            </div>
        </div>
    )
}

export default App;