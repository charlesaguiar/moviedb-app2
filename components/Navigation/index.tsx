import { GiHamburgerMenu } from "react-icons/gi";
import { ImSearch } from "react-icons/im";

import useToggle from "@hooks/useToggle";

import Logo from "@components/Logo";
import SearchBar from "@components/SearchBar";
import Sidebar from "@components/Sidebar";
import Options from "./Options";

import s from "./Navigation.module.scss";

const Navigation: React.FC = () => {
  const [showSearchBar, toggleSearchBar] = useToggle(false);
  const [showSideBar, toggleSideBar] = useToggle(false);

  return (
    <div className={s["nav-global"]}>
      <header>
        <nav className="flex justify-between items-center">
          <div className="md:hidden mr-8 cursor-pointer">
            <GiHamburgerMenu
              size={32}
              color="white"
              onClick={() => toggleSideBar()}
            />
          </div>
          <div className="flex items-center gap-8 flex-row-reverse md:flex-row">
            <Logo />
            <ImSearch
              className="xl:hidden"
              color="white"
              size={32}
              style={{ cursor: "pointer" }}
              onClick={() => toggleSearchBar()}
            />
            <ul className={s.menu}>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>People</li>
              <li>More</li>
            </ul>
          </div>
          <Options />
        </nav>
      </header>
      <div
        className={`mobile-searchbar xl:hidden ${
          showSearchBar ? "active" : ""
        }`}
      >
        <div className="p-4">
          <SearchBar width="full" />
        </div>
      </div>
      <Sidebar open={showSideBar} toggleSideBar={toggleSideBar} />
    </div>
  );
};

export default Navigation;
