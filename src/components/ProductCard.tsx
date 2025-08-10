import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { Box, Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReviewsView from "./ReviewsView";
import _get from "lodash/get";
import { CurrencyFormatter } from "../common/utils";
import { Product } from "../types";
import styles from "../styles/components/ProductCard.module.scss";
import clsx from "clsx";

interface ProductCardProps {
  product: Product;
}

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <div className={styles.logo}>
      <img
        src={src}
        alt="brandlogo"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const navigate = useNavigate();
  const { buyPrice, onSalePrice } = _get(product, "productVariants[0]");

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  const getDiscount = () => {
    return 100 - Math.round((onSalePrice / buyPrice) * 100);
  };

  const getButtonView = () => {
    if (count > 0) {
      return (
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          onClick={(e) => e.stopPropagation()}
        >
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Box mx={2} display="flex" alignItems="center">
            {count}
          </Box>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </ButtonGroup>
      );
    } else {
      return (
        <Button
          variant="contained"
          onClick={(e) => {
            e.stopPropagation();
            setCount(count + 1);
          }}
        >
          <b>Add</b>
        </Button>
      );
    }
  };

  return (
    <>
      <Box
        sx={{
          flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 30%", lg: "1 1 22%" },
          maxWidth: "345px",
        }}
      >
        <Card
          sx={{
            maxWidth: 345,
            border: "1px solid #e5e5e5",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            },
          }}
          onClick={handleProductClick}
          className={styles.productCard}
        >
          <CardHeader
            avatar={
              <Logo
                src={
                  "https://dukaan.b-cdn.net/100x100/webp/upload_file_service/a69d7376-7b9a-402a-ab63-d376f81a3a85/download-4.png"
                }
              ></Logo>
            }
            title={product.productName}
          />
          <CardMedia component="div">
            <div className={styles.ribbonContainer}>
              <img
                src={
                  "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp"
                }
                alt={"prod-img"}
                className={styles.styledImage}
              />

              <div className={styles.ribbon}>{`${getDiscount()}% OFF`}</div>
            </div>
            <ReviewsView />
          </CardMedia>

          <div className={styles.actionWrapper}>
            <div className={styles.actionContainer}>
              <div className={styles.priceView}>
                <h3 style={{ margin: 0 }}>
                  <CurrencyFormatter amount={onSalePrice} currency="INR" />
                </h3>
                <div>
                  <p className={styles.text}>
                    <CurrencyFormatter amount={buyPrice} currency="INR" />
                  </p>
                </div>
              </div>
              {getButtonView()}
            </div>
          </div>
        </Card>
      </Box>
    </>
  );
};

export default ProductCard;
