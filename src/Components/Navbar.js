import Logo from "../assets/Navbar.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} className="navbarLogo" alt="link logo" />
      <div className="navbarText">Shortener</div>
    </div>
  );
};

export default Navbar;
