import { Link } from "react-router-dom"

export const NavBar = ()=>{
    return(
    <div className="nav-bar">
        <Link to="/">Confirmación</Link>
        <Link to="/bienvenida">Bienvenida</Link>
        <Link to="/ubicacion">Ubicación</Link>
    </div>
    )
}