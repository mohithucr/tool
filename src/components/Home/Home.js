import React from 'react';
import Row1 from "./Row1/Row1";
import Row2 from "./Row2/Row2";
import Row3 from "./Row3/Row3";
import Row4 from "./Row4/Row4";
import "./home.css";

function Home() {
    return (
        <div className = "home">
            <div className = "home-container">
                <img className = "home_image" src = "" alt = "" />
            
                <div className = "home_row">
                    <Row1 />
                    <Row2 />
                    <Row3 />
                    <Row4 />
                </div>

                
                
            </div>
        </div>    
    )
}

export default Home
