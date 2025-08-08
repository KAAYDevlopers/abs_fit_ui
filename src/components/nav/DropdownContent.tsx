import React from "react";
import { Link } from "react-router-dom";

interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  heading: string;
  submenu: SubmenuItem[];
}

interface DropdownContentProps {
  submenuscontent: MenuSection[];
  setIsDrawerOpen?: (open: boolean) => void;
  handleClick: () => void;
}

const DropdownContent: React.FC<DropdownContentProps> = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
}) => {
  return (
    <div className="dropdown_content">
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h4>{item.heading}</h4>
            <ul>
              {item.submenu.map(({ label, href }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownContent;
