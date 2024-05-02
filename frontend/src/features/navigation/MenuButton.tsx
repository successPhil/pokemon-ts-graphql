import { MenuButtonProps } from "../../interfaces/MenuButtonProps";
const MenuButton = ({toggleShowMenu}: MenuButtonProps) => {
    return <button onClick={toggleShowMenu} className="mobile-menu">Menu</button>
}


export default MenuButton;

