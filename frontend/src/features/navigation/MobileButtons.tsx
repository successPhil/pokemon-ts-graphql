import { Link } from "react-router-dom";

import { NavigationPath } from "../../interfaces/navigationPaths";
import { MenuButtonProps } from "../../interfaces/MenuButtonProps";


const MobileButtons: React.FC<NavigationPath & MenuButtonProps> = ({path, name, toggleShowMenu}) => (
    <Link key={path} to={path}>
    <button onClick={()=> toggleShowMenu()} type="button" className="mobile-button">
        {name}
    </button>
    </Link>
)

export default MobileButtons;