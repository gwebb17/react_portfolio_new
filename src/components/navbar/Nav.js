import navBannerImage from "../../utils";
import styles from "./Nav.css";

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

    const testArray = ["Home", "About", "Resume"]
    const link_ids = ["home_section_id", "about_section_id", "resume_section_id"]

    const linksToMap = (links, ids) => {
        return links.map(text => <button onClick={()=> scrollTo(ids)}>{text}</button>);
    }

    function scrollTo(linkId) {    
        document.getElementById(linkId).scrollIntoView();
    }


    return (
        <div className="nav__outer_container">
            <div className="nav__background_image">
                <img src={process.env.PUBLIC_URL + "/stars.jfif"} alt="navbar background image" />
            </div>
            
            <div className="nav__links_container">
                {linksToMap(testArray, link_ids)}
            </div>

            {/*these need to be moved to a main Content component and referenced from this component somehow*/}
            <div className="home_section_container" id="home_section_id">
                hihiihiihi
            </div>

            <div className="about_section_container" id="about_section_id">
                hihiihiihi
            </div>

            <div className="resume_section_container" id="resume_section_id">
                hihiihiihi
            </div>
        </div>    
    );
}

export default Nav;