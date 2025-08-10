import { Box, Container } from "@mui/material";
import BreadcrumbsCust from "../components/Breadcrumbs";
import styles from "../styles/pages/ProductCategory.module.scss";

const ProductCategory = () => {
  return (
    <Container maxWidth="xl">
      <Box className={styles.styledBox}>
        <BreadcrumbsCust links={["Dashboard", "Categories"]} text={"Product"} />
        <img
          className={styles.styledImage}
          src={
            "https://dukaan.b-cdn.net/1000x1000/webp/upload_file_service/225ee834-90b8-46f9-8ca7-185e5065c004/image.png"
          }
          alt={"prod-img"}
        />
      </Box>
    </Container>
  );
};

export default ProductCategory;
