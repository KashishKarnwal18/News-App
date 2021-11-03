import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
    // componentDidMount(){
    // fetch('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=76dc2439f4db4b0d9a50c6209d48e846')
    //.then(function(response){
    //  return response.json();
    //})
    //.then(function(myJson){
    //    console.log(myJson);
    //  });

    return (
        <div className='hero-container'>
            <h1>STAY UPDATED</h1>
            <p>Nothing but authentic</p>
            <div className="hero-btns">
                <ul>
                    <li className="headlines">
                        <Link to='/headlines' className="link" >
                            Today's Updates
                        </Link>
                    </li>
                    <li className="headlines">
                        <Link to='/business' className="link" >
                            Business News
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}



export default HeroSection;