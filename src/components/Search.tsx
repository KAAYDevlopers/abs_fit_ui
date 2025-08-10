import React, { useState } from "react";
import { InputBase, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/components/Search.module.scss";

export const Search: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div className={styles.search}>{children}</div>;
};

export const SearchIconWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles.searchIconWrapper}>{children}</div>;
};

export const StyledInputBase: React.FC<
  React.ComponentProps<typeof InputBase>
> = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const clearSearch = () => {
    setValue("");
  };

  return (
    <>
      <InputBase
        {...props}
        value={value}
        onChange={handleChange}
        classes={{
          root: styles.inputRoot,
          input: styles.inputInput,
        }}
      />
      {value && (
        <IconButton
          className={styles.clearButton}
          onClick={clearSearch}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    </>
  );
};
