import NavBar from "react-bootstrap/NavBar";
import ThemeButton from "../theme/ThemeButton";

function Header() {
  return (
    <NavBar>
      <NavBar.Brand href="#home">Cours React</NavBar.Brand>
      <ThemeButton />
    </NavBar>
  );
}

export default Header;
