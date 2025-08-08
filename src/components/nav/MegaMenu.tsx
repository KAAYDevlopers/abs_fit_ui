import React from "react";
import MenuItem from "./MenuItem";
import { menuData } from "./MenuData";

interface MegaMenuProps {
  handleToggle: (index: number) => void;
  clicked: number | null;
  setIsDrawerOpen?: (open: boolean) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({
  handleToggle,
  clicked,
  setIsDrawerOpen,
}) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children }, index) => (
            <MenuItem
              key={index}
              {...{
                label,
                href,
                children,
                setIsDrawerOpen,
              }}
              onToggle={() => handleToggle(index)}
              active={clicked === index}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
