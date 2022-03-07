import React from 'react';
import Typed from 'react-typed';


const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info'>
            <h1 style={{fontFamily:'cursive'}}>Samanja Cartagena </h1>
            <Typed 
                className='typed-text'
                strings={[ "Web Developer", "App Developer","Software Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <a href="#contactContainer" className="btn-main-offer">Contact me</a>
        </div>
    </div>
    )
}

export default Header