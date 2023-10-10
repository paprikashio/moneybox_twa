import "./header.css";
import PropTypes from "prop-types";
const Header = ({ title, action }) => {

    return(
        <div className={"header"}>
            <div className={"title"}>
                { title }
            </div>
            { action }
        </div>
    )

}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    action: PropTypes.node
};

export default Header;