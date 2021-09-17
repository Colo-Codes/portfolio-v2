import HamburgerMenu from "./HamburgerMenu";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = props => {
    return (<header id="header">
        <HamburgerMenu />
        <Navbar />
        <Hero />
    </header>);
};

export default Header;