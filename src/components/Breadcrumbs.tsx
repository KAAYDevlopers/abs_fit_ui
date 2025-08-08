import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

interface BreadcrumbsCustProps {
  links: string[];
  text: string;
}

const BreadcrumbsCust: React.FC<BreadcrumbsCustProps> = (props) => {
  const { links, text } = props;
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {links.map((link, index) => (
        <Link key={index} underline="hover" color="inherit" href="/">
          {link}
        </Link>
      ))}
      <Typography color="text.primary">{text}</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsCust;
