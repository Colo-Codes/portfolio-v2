import Hero from "./Hero";
import Navbar from "./Navbar";

const Header = props => {
    return (<header id="header">
        <Navbar />
        <Hero />
    </header>);
};

export default Header;