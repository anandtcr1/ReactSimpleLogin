import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="nav">
            <Link to="/" className="site-title">Site name</Link>
            <ul>
                <CustomLink href='/home' >Pricing</CustomLink>
                <CustomLink href='/about' >About</CustomLink>
            </ul>
        </nav>
    )
}

export default Navbar;

function CustomLink({href, children, ...props}) {
    const path = window.location.pathname;

    return (
        <li className={path === href ? "active" : ""}>
            <Link to={href} {...props}>
                {children}
            </Link>
        </li>
    )
}