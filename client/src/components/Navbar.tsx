import { useEffect, useState } from "react";
import img from "../img/prismatic-todos.png";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [hamburger, setHamburger] = useState(false);
  function checkWindow() {
    if (window.innerWidth < 900) {
      setMobile(true);
      return;
    }
  }
  const resizeWindow = () => {
    setWidth(window.innerWidth);
    width < 700 ? setMobile(true) : setMobile(false);
  };
  useEffect(() => {
    checkWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  });
  return mobile ? (
    <div className="mobile-menu">
      <a href="/">
        <img
          src={img}
          style={{ height: 75, margin: -30, padding: 10 }}
          alt="Prismatic Todos"
        />
      </a>
      <FaBars
        style={{ color: "#4504ea", float: "right" }}
        className="bars"
        onClick={() => setHamburger(!hamburger)}
      />
      {hamburger ? (
        <ul className="hamburger">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/todos">Todos</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  ) : (
    <nav>
      <ul>
        <li className="img" style={{ marginRight: "2em" }}>
          <a href="/">
            <img
              src={img}
              style={{ height: 75, margin: -30, padding: 0 }}
              alt="Prismatic Todos"
            />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/todos">Todos</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
