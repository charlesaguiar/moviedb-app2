import { ImBell, ImPlus } from "react-icons/im";
import SearchBar from "@components/SearchBar";
import NavAvatar from "../NavAvatar";

const Options: React.FC = () => {
  return (
    <div className="hidden gap-8 md:flex lg:gap-16 items-center">
      <div className="hidden xl:block">
        <SearchBar />
      </div>
      <ImPlus color="white" size={32} style={{ cursor: "pointer" }} />
      <ImBell color="white" size={32} style={{ cursor: "pointer" }} />
      <NavAvatar classNames="mt-2 right-5" />
    </div>
  );
};

export default Options;
