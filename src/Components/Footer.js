import Web from "../assets/web.png";
import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import { Link } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerText">Sam Abdul</div>
      <div className="footerIcon">

      <Link href="https://www.samspace.dev/"
      onClick={() => {
        alert("Redirecting to Sam Abdul Portfolio");
      }}>
        <div>
          <img src={Web} className="icon" alt="website" />
        </div></Link>
        <Link href="https://www.linkedin.com/in/sam-abdul-6b5875196/">
        <div>
          <img src={LinkedIn} className="icon" alt="website" />
        </div></Link>
        <Link href="https://twitter.com/SamAbdul_">
        <div>
          <img src={Twitter} className="icon" alt="website" />
        </div></Link>
      </div>
      <Link href="https://github.com/sam-abdul">
      <div className="iconText">https://github.com/sam-abdul</div>
      </Link>
     
    </div>
  );
};

export default Footer;
