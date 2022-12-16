import { useRef, useState } from "react";

import { MdSearch } from "react-icons/md";

import Dropdown from "@components/Dropdown";
import Results from "./Results";

import useClickOutside from "@hooks/useClickOutside";
import useDebouncedValue from "@hooks/useDebouncedValue";

import s from "./SearchBar.module.scss";
import { cn, formatCssVariables } from "@utils/style";

const SEARCHBAR_WIDTHS = {
  full: "100%",
  responsive: "max(200px, 30vw)",
};

type SearchBarWidth = keyof typeof SEARCHBAR_WIDTHS;

interface ISearchBarProps {
  width?: SearchBarWidth;
  classNames?: string;
}

const SearchBar: React.FC<ISearchBarProps> = ({
  width = "responsive",
  classNames = "",
}) => {
  const [query, setQuery] = useState("");
  const [autoCompleteVisible, setAutoCompleteVisible] = useState(false);
  const searchAreaRef = useRef<HTMLDivElement>(null);

  const debouncedQuery = useDebouncedValue(query);
  useClickOutside(searchAreaRef, () => setAutoCompleteVisible(false));

  return (
    <div ref={searchAreaRef}>
      <form
        className={cn(s.container, classNames)}
        style={formatCssVariables({
          name: "width",
          value: SEARCHBAR_WIDTHS[width],
        })}
      >
        <MdSearch size={32} color="#888" />
        <input
          id="search-input"
          placeholder="Search for millions of titles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={s.input}
          onFocus={() => setAutoCompleteVisible(true)}
          autoComplete="off"
        />
      </form>
      <Dropdown visible={autoCompleteVisible} classNames="mt-2 mr-10">
        <Results query={debouncedQuery} />
      </Dropdown>
    </div>
  );
};

export default SearchBar;
