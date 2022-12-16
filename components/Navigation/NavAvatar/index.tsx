import { useRef } from "react";

import useClickOutside from "@hooks/useClickOutside";
import useToggle from "@hooks/useToggle";

import Avatar from "@components/Avatar";
import Dropdown from "@components/Dropdown";
import OptionsList from "../Options/OptionsList";

interface INavAvatarProps {
  username?: string;
  classNames?: string;
}

const NavAvatar: React.FC<INavAvatarProps> = ({ username, classNames }) => {
  const [dropdownMenuVisible, toggleDropdownMenu] = useToggle(false);

  const avatarRef = useRef<HTMLDivElement>(null);
  useClickOutside(avatarRef, () =>
    toggleDropdownMenu({ force: true, forcedValue: false })
  );

  return (
    <div ref={avatarRef}>
      <Avatar
        initial="C"
        username={username}
        size={60}
        className="cursor-pointer"
        onClick={toggleDropdownMenu}
      />
      <Dropdown visible={dropdownMenuVisible} classNames={classNames}>
        <OptionsList />
      </Dropdown>
    </div>
  );
};

export default NavAvatar;
