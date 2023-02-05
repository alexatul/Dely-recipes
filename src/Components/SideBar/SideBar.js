import "./SideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <h2>Despre blog</h2>
        <img
          className="sidebar-items-image"
          src="/images/about-blog.svg"
          alt="piece of cake"
        />
        <p>
          Blogul Dely's sweets este un blog culinar cu diverse reţete savuroase,
          dedicat persoanelor care vor să gătească preparate delicioase.
        </p>
        <div className="sidebar-category">
          <span>Categorii</span>
          <ul>
            <li>
              <Link to="/sweets">Prăjituri</Link>
            </li>
            <li>
              <Link to="/cakes">Torturi</Link>
            </li>
            <li>
              <Link to="/foods">Mâncăruri</Link>
            </li>
            <li>
              <Link to="/fasting-sweets">Prajituri de post</Link>
            </li>
            <li>
              <Link to="/fasting-foods">Mâncăruri de post</Link>
            </li>
          </ul>
        </div>
        <img
          className="sidebar-cake"
          src="/images/about-blog.png"
          alt="cake transparent"
        />
      </div>
    </div>
  );
}

export default SideBar;
