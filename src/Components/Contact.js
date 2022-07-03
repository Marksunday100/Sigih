import Phone from "../assets/phone.png";
import { Link } from "@material-ui/core";

const Contact = () => {
  return (
    <>
    <Link href="https://twitter.com/SamAbdul_" >

  <div className="contact">
        <img className="contactImg" src={Phone} alt="phone" />
        <div className="contactText">Contact Us</div>
      </div>
      </Link>
     
    </>
  );
};

export default Contact;
