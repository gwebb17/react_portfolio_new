import navBannerImage from "../../utils";
import styles from "./Nav.css";

const Nav = () => {
    return (
        <div className="nav__outer_container">
            <div className="nav__background_image">
                {navBannerImage(500)}
            </div>
        </div>    
    );
}

export default Nav;