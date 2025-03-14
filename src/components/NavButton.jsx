import { Link } from "react-router-dom";

const NavButton = ({ to, children, className = "", onClickCloseMenu = null }) => {
  const handleClick = () => {
    if (onClickCloseMenu) onClickCloseMenu(); 
  };

  return (
    <Link to={to} onClick={handleClick}>
      <button className={`${className}`}>
        {children}
      </button>
    </Link>
  );
};

export default NavButton;
