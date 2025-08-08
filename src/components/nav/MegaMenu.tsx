import React from "react";
import { Drawer, List, ListItem, ListItemText, Collapse } from "@mui/material";
import MenuItem from "./MenuItem";
import { menuData } from "./MenuData";
import { Padding } from "@mui/icons-material";

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
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const handleSubMenuToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="nav__container">
      <nav>
        <ul>
          {/* <List sx={{ padding: '0px' }}> */}
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
        {/* </List> */}
      </nav>
    </div>
  );
};

export default MegaMenu;
