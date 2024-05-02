import { Link } from "react-router-dom";

import { NavigationPath } from "../../interfaces/navigationPaths";

const NavButton: React.FC<NavigationPath>  = ({path, name}) => (
    <Link key={path} to={path}>
    <button type="button" className="nav-button">
        {name}
    </button>
    </Link>
)

export default NavButton;