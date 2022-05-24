import { GiPlanetCore } from "react-icons/gi";
// import { FaList } from "react-icons/fa";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* <FaList style={{ fontSize: "2.5em" }} /> */}
          <GiPlanetCore style={{ fontSize: "2.5em" }} />
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
