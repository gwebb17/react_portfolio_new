import navBannerImage from "../../utils";
import styles from "./Nav.css";

const linksForButtons = ["top", "about", "resume"];

const Nav = () => {

    const navScrollPoints={
        top : {
            id: 'insert class or id for top scroll here',
            text: 'Home'
        },
        about : {
            id : 'something',
            text: 'About',
        },
        resume : {
            id : 'something else',
            text: 'resume'
        }
    }

    const linksToMap = (links) => {
        return links.map(text => <button className="links_buttons" onClick={()=>scrollTo()}>{text}</button>);
    }

    function scrollTo(linkId) {    
        document.getElementById(linkId).scrollIntoView();
    }

    return (
        <>
            <div className="nav__background_image">

            </div>
            <div className="nav__outer_container">
                <div className="nav__links_container">
                    {linksToMap(linksForButtons)}
                </div>
            </div>
        </> 
    );
}

export default Nav;