import NavLink from "./NavLinks";
import MenuButton from "./MenuButton";
import { MenuButtonProps } from "../../interfaces/MenuButtonProps";
import './navigation.css'
import logo from '../../assets/PokemonKoNew.png'

const NavBar =  ({toggleShowMenu}: MenuButtonProps) => {
    return (
        <nav className="navbar">
        <NavLink/>
        <img src={logo} alt="logo" className="pokemon-logo"/>
        <MenuButton toggleShowMenu={toggleShowMenu}/>
        </nav>
    )
}

export default NavBar;