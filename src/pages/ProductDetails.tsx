import React from "react";
import { Box, Container } from "@mui/material";
import BreadcrumbsCust from "../components/Breadcrumbs";

const ProductDetails: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ marginTop: "136px" }}>
      <BreadcrumbsCust links={["Dashboard", "Categories"]} text={"Product"} />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
          <Box margin={2} style={{ border: "1px solid #e0e0e0" }}>
            <img
              src="https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg"
              alt="cat-img"
            ></img>
          </Box>
        </Box>
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>details</Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
