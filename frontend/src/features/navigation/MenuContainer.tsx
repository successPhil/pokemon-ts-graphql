import { navigationPaths } from "../../constants/navigation";
import MobileButtons from "./MobileButtons";
import { MenuButtonProps } from "../../interfaces/MenuButtonProps";


const MenuContainer = ({toggleShowMenu}: MenuButtonProps) => {
    return (
        <div className="menu-container">
           {navigationPaths.map((path) => (
                    <MobileButtons toggleShowMenu={toggleShowMenu} key={path.path} path={path.path} name={path.name}>
                        {path.name}
                    </MobileButtons>
                ))}
        </div>
    )
}

export default MenuContainer;