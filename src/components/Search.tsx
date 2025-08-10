import { InputBase } from "@mui/material";
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
  return (
    <InputBase
      {...props}
      classes={{
        root: styles.inputRoot,
        input: styles.inputInput,
      }}
    />
  );
};
