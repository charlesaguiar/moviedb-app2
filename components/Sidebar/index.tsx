import { MdMovie, MdTv, MdPeopleAlt, MdMore } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { ImPlus } from "react-icons/im";

import Divider from "@components/Divider";
import NavAvatar from "@components/Navigation/NavAvatar";
import NotificationsButton from "@components/NotificationsButton";

import s from "./Sidebar.module.scss";

interface ISidebarProps {
  open: boolean;
  toggleSideBar: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({ open, toggleSideBar }) => {
  return (
    <div className={s.container}>
      <div className={`sidebar ${open ? "active" : ""}`}>
        <div className={s.header}>
          <span className="text-3xl font-bold text-white">MENU</span>
          <IoCloseSharp
            size={32}
            color="white"
            onClick={() => toggleSideBar()}
          />
        </div>
        <div className="flex flex-col gap-5 my-6">
          <NavAvatar username="Charles" />
        </div>
        <Divider />
        <div className="flex flex-col my-4 h-full">
          <ul className="flex flex-col gap-8 text-xl font-bold text-white">
            <li className={s["menu-item"]}>
              <MdMovie size={32} />
              <span>Movies</span>
            </li>
            <li className={s["menu-item"]}>
              <MdTv size={32} />
              <span>TV Shows</span>
            </li>
            <li className={s["menu-item"]}>
              <MdPeopleAlt size={32} />
              <span>People</span>
            </li>
            <li className={s["menu-item"]}>
              <MdMore size={32} />
              <span>More</span>
            </li>
          </ul>
          <div className="mt-auto">
            <Divider />
            <div className="flex flex-col gap-8 text-xl font-bold text-white mt-6">
              <li className={s["menu-item"]}>
                <ImPlus size={32} />
                <span>Add Content</span>
              </li>
              <NotificationsButton
                classNames={s["menu-item"]}
                notifications={16}
                iconSize={32}
                showLabel
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
