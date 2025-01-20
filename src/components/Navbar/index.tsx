import { NavLink as Navigation } from 'react-router-dom';
import NavLinks from './NavLinks';

const Navbar = () => {
  return (
    <header className="header">
      <Navigation
        to="/"
        className="w-10 h-20 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">JK</p>
      </Navigation>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLinks page="about" />
        <NavLinks page="projects" />
        <NavLinks page="contacts" />
      </nav>
    </header>
  );
};

export default Navbar;
