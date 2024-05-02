import NavButton from "./NavButton";
import { navigationPaths } from "../../constants/navigation";

const NavLink: React.FC = () => {
  
    return (
            <ul>
                {navigationPaths.map((path) => (
                    <NavButton key={path.path} path={path.path} name={path.name}>
                        {path.name}
                    </NavButton>
                ))}
            </ul>
    )
}

export default NavLink;