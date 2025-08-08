import styled from "@emotion/styled";
import { InputBase, alpha } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  alignItems: "center",
  borderRadius: 4, // theme.shape.borderRadius default value
  backgroundColor: alpha("#000000", 0.15),
  "&:hover": {
    backgroundColor: alpha("#000000", 0.25),
  },
  marginLeft: 16, // theme.spacing(2) default value
  width: "100%",
  "@media (min-width:0px)": {
    marginLeft: 0,
    width: "350px",
  },
  "@media (min-width:600px)": {
    marginLeft: 24,
    width: "auto",
  },
  "@media (min-width:900px)": {
    width: "400px", // Adjusted width for screens larger than 'sm'
  },
}));

export const SearchIconWrapper = styled("div")(() => ({
  padding: "0 16px",
  height: "100%",
  position: "absolute" as const,
  pointerEvents: "none" as const,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 0",
    // vertical padding + font size from searchIcon
    paddingLeft: "calc(1em + 32px)",
    transition: "width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    width: "100%",
    "@media (min-width:900px)": {
      width: "20ch",
    },
  },
}));
