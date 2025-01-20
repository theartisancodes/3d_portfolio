import { NavLink as Navigation } from 'react-router-dom';

interface NavLinkProps {
  page: string;
}

const NavLink = ({ page }: NavLinkProps) => {
  return (
    <Navigation
      to={`/${page.toLowerCase()}`}
      className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}
    >
      {page}
    </Navigation>
  );
};

export default NavLink;
