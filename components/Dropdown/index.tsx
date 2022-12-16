import { forwardRef } from "react";

import { cn } from "@utils/style";
import s from "./Dropdown.module.scss";

interface IDropdownProps {
  visible: boolean;
  classNames?: string;
  children: React.ReactNode;
}

const Dropdown = forwardRef<HTMLDivElement, IDropdownProps>(
  ({ visible, classNames = "", children }, ref) => {
    if (!visible) return null;
    return (
      <div ref={ref} className={cn(s.dropdown, classNames)}>
        {children}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";

export default Dropdown;
