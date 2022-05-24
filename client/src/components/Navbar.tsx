import { GiPlanetCore } from "react-icons/gi";
// import { FaList } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <FaList className="icon" style={{ fontSize: "2.5em" }} /> */}
          <a href="/">
            <GiPlanetCore className="icon" style={{ fontSize: "1.5em" }} />
          </a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
