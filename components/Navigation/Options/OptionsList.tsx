import {
  MdAccountCircle,
  MdPeopleAlt,
  MdDashboard,
  MdLogout,
} from "react-icons/md";

import s from "../Navigation.module.scss";
import { cn } from "@utils/style";

const OptionsList: React.FC = () => {
  return (
    <div className={s["dropdown-menu"]}>
      <div className={s["dropdown-menu-item"]}>
        <MdAccountCircle size={28} />
        <span>My Account</span>
      </div>
      <div className={s["dropdown-menu-item"]}>
        <MdPeopleAlt size={28} />
        <span>People I Know</span>
      </div>
      <div className={s["dropdown-menu-item"]}>
        <MdDashboard size={28} />
        <span>Dashboards</span>
      </div>
      <div
        className={cn(s["dropdown-menu-item"], s["dropdown-menu-item-logout"])}
      >
        <MdLogout size={28} />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default OptionsList;
