import styles from './Nav.css';
import { useState, useRef } from 'react';

const linksForButtons = ["top", "about", "resume", "links"];

const Nav = () => {
    const [isHovering, setIsHovering] = useState(false);    //might use at some point look up onMouseenter/Leave React if needed
    const aboutRef = useRef(); //pass to element in About.js perhaps to conditionally scroll to links

    const linksToMap = (links) => {
        return links.map(text => 
            <button className="links_buttons_hovering"
                onClick={()=>scrollTo()}>
                {text.toUpperCase()}
            </button>);
    }

    function scrollTo(linkId) {    
        let idName = [];

        document.getElementById(linkId).scrollIntoView();
    }

    return (
        <>
            <div className="nav__background_image">

            </div>
            <div className="nav__links_container">
                <div className="nav__links">
                    {linksToMap(linksForButtons)}
                </div>
            </div>
        </> 
    );
}

export default Nav;