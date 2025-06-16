import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import Like from "../icons/like";
import Search from "./search";
const Header = ({ withSearch = false, onSearch }) => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Логотип" className="header__logo-img" />
        </Link>
        <ul className="header__list">
          {withSearch && (
            <li className="header__item">
              <Search className="header__search" onSearch={onSearch} />
              <span className="desktop-text">Поиск</span>
            </li>
          )}
          <li>
            <Link className="header__item" to="/favorites">
              <Like />
              <span className="desktop-text">Избранное</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
