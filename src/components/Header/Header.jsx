import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-container">
            <nav className="nav nav--shadow">
                <Link to="/" className="link">
                    <div className="nav-hero nav__hero__main e-nav-hero cursor-pointer">Sahaj</div>
                </Link>

                <div className="nav-header">
                    <p className="nav__header__items cursor-pointer">
                        <Link to="/products" className="link">Shop</Link>
                    </p>

                    <p className="nav__header__items cursor-pointer">
                        <Link to="/monitors" className="link">Monitors</Link>
                    </p>

                    <p className="nav__header__items cursor-pointer">
                        <Link to="/headphones" className="link">Headphones</Link>
                    </p>

                    <p className="nav__header__items cursor-pointer">
                        <Link to="/keyboards" className="link">Keyboards</Link>
                    </p>
                </div>

                <input className="nav-search" type="text" placeholder="Don't Search here" name="" id="" />

                <div className="nav-social">
                    <div className="badge-icon-container social-button cursor-pointer dispnone">
                        <Link to="/login">
                            <button className="btn btn-login">
                                Login
                            </button>
                        </Link>
                    </div>

                    <div className="badge-icon-container social-button cursor-pointer dispnone">
                        <Link to="/cart" className="link">
                            <div className="fas fa-shopping-cart badge-icon"></div>
                        </Link>
                    </div>
                    <div className="badge-icon-container social-button cursor-pointer dispnone">
                        <Link to="/wish" className="link">
                            <div className="far fa-heart badge-icon"></div>
                        </Link>
                    </div>

                    <div className="badge-icon-container social-button cursor-pointer dispnone">
                        <Link to="/account" className="link">
                            <div className="far fa-user badge-icon "></div>
                        </Link>
                    </div>

                    <div className="fas fa-chevron-circle-down hamburger social-button" id="ham-icon"></div>
                </div>
            </nav>
        </header>
    );
}

export { Header }