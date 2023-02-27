import React from 'react'
import SeanImg from '../images/Sean2.jpeg';



function Header(){
    return (
        <div className='header'>
            <img className='Sean' src={SeanImg} alt = 'Sean'/>
        </div>
    );
}

export default Header;