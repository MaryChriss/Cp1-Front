import { BiHome } from "react-icons/bi"
import { Link } from "react-router-dom"
import { FiFilePlus, FiUser } from "react-icons/fi";
import { StyledMenu, StyledMenuItem, StyledWrapperMenu } from "./Menu.style";

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledWrapperMenu>
                <StyledMenuItem> 
                    <BiHome />
                    <Link to="/">Home</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <FiFilePlus />
                    <Link to="/novalista">Nova Lista</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                    <FiUser />
                    <Link to="/perfil">Perfil</Link>
                </StyledMenuItem>
            </StyledWrapperMenu>
        </StyledMenu>
    )
}