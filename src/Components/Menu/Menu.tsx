import { BiHome } from "react-icons/bi"
import { Link } from "react-router-dom"
import { FiFilePlus, FiUser } from "react-icons/fi";

export const Menu = () => {
    return (
        <nav>
            <ul>
                <li> 
                    <BiHome />
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <FiFilePlus />
                    <Link to="/novalista">Nova Lista</Link>
                </li>

                <li>
                    <FiUser />
                    <Link to="/perfil">Perfil</Link>
                </li>
            </ul>
        </nav>
    )
}