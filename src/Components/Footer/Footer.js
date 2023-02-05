import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import {
  RiInstagramFill,
  RiCake2Line,
  RiCake3Line,
  RiGitRepositoryPrivateLine,
} from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlinePrivacyTip } from "react-icons/md";
import { GiSuperMushroom } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { BiCookie } from "react-icons/bi";
import { GoBrowser } from "react-icons/go";

function Footer() {
  return (
    <div className="footer-page">
      <div className="logo-footer">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="footer">
        <div className="logo-list-footer">
          <div className="category-cookies">
            <div className="category-footer">
              <h4>Categorii</h4>
              <ul>
                <li>
                  <Link to="/sweets">
                    <RiCake3Line /> Prăjituri
                  </Link>
                </li>
                <li>
                  <Link to="/cakes">
                    <RiCake2Line /> Torturi
                  </Link>
                </li>
                <li>
                  <Link to="/foods">
                    <TbMeat /> Mâncăruri
                  </Link>
                </li>
                <li>
                  <Link to="/fasting-sweets">
                    <BiCookie /> Prajituri de post
                  </Link>
                </li>
                <li>
                  <Link to="/fasting-foods">
                    <GiSuperMushroom /> Mâncăruri de post
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cookies">
              <h4>Politica</h4>
              <ul>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/HTTP_cookie"
                    target="_blank"
                  >
                    <GoBrowser /> Cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Privacy_policy"
                    target="_blank"
                  >
                    <MdOutlinePrivacyTip /> Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://en.wikipedia.org/wiki/Confidentiality"
                    target="_blank"
                  >
                    <RiGitRepositoryPrivateLine /> Confidentiality
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="social-media">
          <a href="">
            <FaFacebookSquare title="Facebook" />
          </a>
          <a href="">
            <RiInstagramFill title="Instagram" />
          </a>
          <a href="">
            <ImYoutube title="Youtube" />
          </a>
          <a href="mailto:contact-us@delys-sweets.com">
            <MdEmail title="Email" />
          </a>{" "}
          <a href="tel:0722222222">
            <BsFillTelephoneFill title="Telefon" />
          </a>
        </div>
      </div>

      <div className="copyright">
        <span>&#169;</span>
        <p>Tulhină Alexandra</p>
      </div>
    </div>
  );
}

export default Footer;
