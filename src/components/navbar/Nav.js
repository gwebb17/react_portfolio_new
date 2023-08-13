import styles from './Nav.css';
import { useState, useRef, useContext, useEffect } from 'react';
import AppContext from '../../AppContext.js';
import { musicNote } from 'utils';

const Nav = () => {
    const linksForButtons = ["about", "tech_resume", "music_resume", "contact"];
    const linkMap = {
        about: 1, //replace id with slide #
        resume: 2,
        contact: 4,
    }

    // const [isHovering, setIsHovering] = useState(false);    //might use at some point look up onMouseenter/Leave React if needed

    const linksToMap = (links) => {
        return links.map(text => 
            <button className="links_buttons_hovering" id={text + "_id"}
                onClick={()=>slideTo(text)}>
                {text.toUpperCase()}
            </button>);

        function slideTo(slideNum) {    
            if (Object.keys(linkMap[slideNum])){                            //if the buttons text (targetId) is also a key in linkMap
                console.log("HI I RAN")
                // let target = document.getElementById(linkMap[slideNum]);  //target = the corresponding value from linkMap keys (don't need to specifiy .keys to access value)
                // target.scrollIntoView();                                    //when button clicked scrollTo runs and scrollIntoView sends user to target
            }
        }
    }
    return (
        <>
            <div className="nav__background_image">

            </div>
            <div className="nav__links_container" id='nav__id'>
                <div className="nav__links">
                    {linksToMap(linksForButtons)}
                </div>
            </div>
        </> 
    );
}

export default Nav;