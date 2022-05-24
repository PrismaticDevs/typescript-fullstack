import { GiPlanetCore } from "react-icons/gi";
function Navbar() {
  return (
    <nav>
      <ul>
        <li>
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
