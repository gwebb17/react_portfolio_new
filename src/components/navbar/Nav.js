import styles from './Nav.css';
import { useState, useRef, useContext } from 'react';
import AppContext from '../../AppContext.js';

const Nav = () => {
    // const aboutRef  = useContext(AppContext);
    const linksForButtons = ["top", "about", "resume", "contact"];
    // const linkIds = [aboutRef];
    const [isHovering, setIsHovering] = useState(false);    //might use at some point look up onMouseenter/Leave React if needed

    const linksToMap = (links) => {
        return links.map(text => 
            <button className="links_buttons_hovering"
                onClick={()=>scrollTo()}>
                {text.toUpperCase()}
            </button>);
    }

    //pass linkIds below?
    function scrollTo() {    


        //temp works:
        const target = document.getElementById('about__id');
        target.scrollIntoView();
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