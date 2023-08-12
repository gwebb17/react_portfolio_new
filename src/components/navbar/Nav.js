import styles from './Nav.css';
import { useState, useRef, useContext, useEffect } from 'react';
import AppContext from '../../AppContext.js';
import { musicNote } from 'utils';

const Nav = () => {
    const linksForButtons = ["about", "resume (technical)", `resume ${musicNote}`, "contact"];
    const linkMap = {      //apparently these ids can be located without context, ref, or importing between different components
        about: 'about__id',
        resume: 'resume__id',
        contact: 'contact__id'
    }

    //Use on mount, will make sure user is at top of page when they click refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])

    const [isHovering, setIsHovering] = useState(false);    //might use at some point look up onMouseenter/Leave React if needed

    const linksToMap = (links) => {
        return links.map(text => 
            <button className="links_buttons_hovering"
                onClick={()=>scrollTo(text)}>
                {text.toUpperCase()}
            </button>);

        function scrollTo(targetId) {    
            if (Object.keys(linkMap[targetId])){                            //if the buttons text (targetId) is also a key in linkMap
                console.log("HI I RAN")
                let target = document.getElementById(linkMap[targetId]);  //target = the corresponding value from linkMap keys (don't need to specifiy .keys to access value)
                target.scrollIntoView();                                    //when button clicked scrollTo runs and scrollIntoView sends user to target
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