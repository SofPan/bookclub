import Nav from "../Nav/Nav";
import TopBar from "./TopBar";

const Header = () => {
  return(
    <header className="flex">
      <Nav />
      <TopBar />
    </header>
  )
}

export default Header;