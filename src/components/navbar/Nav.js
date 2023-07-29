import styles from './Nav.css';

const linksForButtons = ["top", "about", "resume", "links"];

const Nav = () => {
    const linksToMap = (links) => {
        return links.map(text => <button className="links_buttons" onClick={()=>scrollTo()}>{text.toUpperCase()}</button>);
    }

    function scrollTo(linkId) {    
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