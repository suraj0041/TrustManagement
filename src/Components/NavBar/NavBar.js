import { Link } from "react-router-dom";

import classs from "./style.module.css";

export default function NavBar() {
  return (
    <>
      <header className={classs.header}>
        <a className={classs.logo} href="home">
          NavBar
        </a>
        <nav className={classs.navbar}>
          <ul>
            <li>
              <Link style={{ "--clr": "1" }} className={classs.active} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={{ "--clr": "2" }} to="/timeline">
                TimeLine
              </Link>
            </li>
            <li>
              <Link style={{ "--clr": "2" }} to="/PostTL">
                {" "}
                Add to post
              </Link>
            </li>
            <li>
              <Link style={{ "--clr": "2" }} to="/Users">
                Users
              </Link>
            </li>
          </ul>

          {/* <a
            href={`#${classs.about}`}
            style={{ "--clr": "1" }}
            className={classs.active}
          >
            About Us
          </a>
          <a href={`#${classs.experience}`} style={{ "--clr": "2" }}>
            Add to post
          </a>
          <a href={`#${classs.experience}`} style={{ "--clr": "2" }}>
            Login
          </a>
          <a href={`#${classs.work}`} style={{ "--clr": "3" }}>
              Add to Timeline
            </a>
            <a href={`#${classs.contactMe}`} style={{ "--clr": "4" }}>
              Contact Us
            </a> */}
          {/*<a href="#" onClick={onClickTheme} style={{ "--clr": "5" }}>
              <i class={`bx bxs-${Theme}`}></i>
            </a> */}
        </nav>
      </header>
    </>
  );
}
