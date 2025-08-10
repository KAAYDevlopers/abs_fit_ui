import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Rating,
  Chip,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  IconButton,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import clsx from "clsx";
import ShareIcon from "@mui/icons-material/Share";
import SecurityIcon from "@mui/icons-material/Security";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BreadcrumbsCust from "../components/Breadcrumbs";
import { Product } from "../types";
import styles from "../styles/pages/ProductDetails.module.scss";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={styles.tabPanel}>{children}</Box>}
    </div>
  );
};

// Styled components have been replaced with SCSS modules

const ProductDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("5lbs");
  const [selectedFlavor, setSelectedFlavor] = useState<string>(
    "Double Rich Chocolate"
  );
  const [tabValue, setTabValue] = useState<number>(0);

  // Mock product data based on the screenshot
  const product: Product = {
    id: "1",
    name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder",
    price: 7784,
    buyPrice: 9299,
    onSalePrice: 7484,
    brand: "ON (Optimum Nutrition)",
    category: "Popular Category / ON (Optimum Nutrition)",
    description:
      "Each serving of the world's best-selling whey protein powder provides 24 grams of high-quality whey protein primarily from Whey Protein Isolate, which has had excess carbohydrates, fat, and lactose 'isolated' out using sophisticated filtering technologies. The powder is also instantized for easy mixing using just a glass and spoon. With numerous different flavors and size options – there's no doubt this is the GOLD STANDARD®.",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  };

  const productImages = [
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
    "https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg",
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/a69d7376-7b9a-402a-ab63-d376f81a3a85/download-4.png",
    "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
    "https://dukaan.b-cdn.net/700x700/webp/media/7dbfa7e5-4390-4960-b755-766dbab0c869.jpg",
  ];

  const sizeOptions = ["2lbs", "5lbs", "10lbs"];
  const flavorOptions = [
    "Double Rich Chocolate",
    "Vanilla Ice Cream",
    "Strawberry",
    "Cookies & Cream",
    "Banana",
  ];

  const handleSizeChange = (event: SelectChangeEvent) => {
    setSelectedSize(event.target.value);
  };

  const handleFlavorChange = (event: SelectChangeEvent) => {
    setSelectedFlavor(event.target.value);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getDiscount = () => {
    return Math.round(
      ((product.buyPrice! - product.onSalePrice!) / product.buyPrice!) * 100
    );
  };

  return (
    <Container maxWidth="xl" sx={{ marginTop: "136px", pb: 4 }}>
      <BreadcrumbsCust
        links={["Home", "Popular Category", "ON (Optimum Nutrition)"]}
        text={"Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder"}
      />

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mt: 2 }}>
        {/* Left Side - Product Images */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 45%" } }}>
          <Box className={styles.productImageContainer}>
            <Box className={styles.priceTag}>Lowest Price on 5lbs</Box>
            <img src={productImages[selectedImage]} alt={product.name} />
            <IconButton
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "rgba(255,255,255,0.9)",
              }}
            >
              <ShareIcon />
            </IconButton>
          </Box>

          <Box className={styles.thumbnailContainer}>
            {productImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={clsx(styles.thumbnailImage, {
                  [styles.selected]: selectedImage === index,
                })}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Box>
        </Box>

        {/* Right Side - Product Details */}
        <Box sx={{ flex: { xs: "1 1 100%", md: "1 1 50%" } }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Brand:{" "}
            <Typography
              component="span"
              color="primary"
              sx={{ fontWeight: "bold" }}
            >
              {product.brand}
            </Typography>
          </Typography>

          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "600", mb: 2 }}
          >
            {product.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
            <Rating value={4.5} precision={0.5} readOnly />
            <Typography
              variant="body2"
              color="primary"
              sx={{ textDecoration: "underline" }}
            >
              87 Customer ratings
            </Typography>
          </Box>

          <Box className={styles.priceContainer}>
            <Typography className={styles.currentPrice}>
              ₹{product.onSalePrice?.toLocaleString()}
            </Typography>
            <Typography className={styles.originalPrice}>
              ₹{product.buyPrice?.toLocaleString()}
            </Typography>
            <Chip
              className={styles.discountChip}
              label={`(${getDiscount()}% OFF)`}
            />
          </Box>

          <Box className={styles.bestPriceBox}>
            <SecurityIcon sx={{ color: "#4caf50" }} />
            <Box>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Best price: ₹7,484
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use coupon <strong>ONAPPONLY300</strong>
                <Button size="small" sx={{ ml: 1, textTransform: "none" }}>
                  Copy code
                </Button>
              </Typography>
            </Box>
          </Box>

          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>Availability:</strong>{" "}
            <span style={{ color: "#4caf50" }}>In stock</span>
          </Typography>

          {/* Size Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: "600" }}>
              Select size
            </Typography>
            <FormControl fullWidth>
              <Select
                value={selectedSize}
                onChange={handleSizeChange}
                displayEmpty
              >
                {sizeOptions.map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          {/* Flavor Selection */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ mb: 1, fontWeight: "600" }}>
              Select Flavour
            </Typography>
            <FormControl fullWidth>
              <Select
                value={selectedFlavor}
                onChange={handleFlavorChange}
                displayEmpty
              >
                {flavorOptions.map((flavor) => (
                  <MenuItem key={flavor} value={flavor}>
                    {flavor}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Button
            variant="contained"
            size="large"
            fullWidth
            className={styles.addToCartButton}
          >
            Add to cart
          </Button>

          <Box className={styles.featureBox}>
            <Box className={styles.featureItem}>
              <SecurityIcon sx={{ fontSize: 40, color: "#00bcd4" }} />
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                Authenticity
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Guaranteed
              </Typography>
            </Box>
            <Box className={styles.featureItem}>
              <LocalShippingIcon sx={{ fontSize: 40, color: "#00bcd4" }} />
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                Free Shipping
              </Typography>
            </Box>
            <Box className={styles.featureItem}>
              <AttachMoneyIcon sx={{ fontSize: 40, color: "#00bcd4" }} />
              <Typography variant="body2" sx={{ fontWeight: "600" }}>
                Cash on Delivery
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Manufacturer Information */}
      <Box className={styles.manufacturerInfo}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
          Manufacturer
        </Typography>
        <Typography variant="body2">
          Optimum Nutrition INC., By Tirupati Wellness LLP (FSSAI Lic
          no.-10016062000334) at Surajpur, Nahan Road, Paonta Sahib, Dist.
          Sirmour, Himachal Pradesh, India – 173025
        </Typography>
      </Box>

      {/* Product Description Tabs */}
      <Box sx={{ mt: 4 }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="product details tabs"
        >
          <Tab label="Description" />
          <Tab label="Additional Information" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
            Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, fontWeight: "600" }}>
            Post-Workout Muscle Support & Recovery
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
            {product.description}
          </Typography>

          <Typography variant="body2" sx={{ mb: 2, fontWeight: "600" }}>
            Why choose Gold Standard 100% Whey?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
            Informed Choice certified. Trusted by the best athletes all over the
            world for over 35 years. This product is suitable for vegetarians.
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
            Benefits
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="The World's Best-Selling Whey Protein Powder" />
            </ListItem>
            <ListItem>
              <ListItemText primary="24 Grams of Protein per Serving to Help Rebuild, and Maintain Muscle" />
            </ListItem>
            <ListItem>
              <ListItemText primary="5.5 Grams of Naturally Occurring BCAAs per Serving to Support Endurance and Recovery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Gluten Free" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Muscle Rebuilding & Recovery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Banned Substance Tested" />
            </ListItem>
          </List>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
            Ingredients
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7 }}>
            Whey Blend (Whey Protein Isolate-primary source, Whey Protein
            Concentrate, Hydrolysed Whey Protein/Whey Peptides).
          </Typography>

          <Typography variant="h6" sx={{ mb: 2, fontWeight: "600" }}>
            Usage
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }}>
            <strong>When To Use</strong> – First thing in the morning, before or
            after exercise, between meals, with a meal, or any time of the day,
            where you a protein boost to your balanced diet
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
            <strong>How To Use</strong> - Add 1 scoop in 180-240 ml water, milk
            or beverage of your choice. You can also add it to a smoothie,
            shake, or make recipes with it
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Typography variant="body1">
            Additional product information and specifications would be displayed
            here.
          </Typography>
        </TabPanel>
      </Box>
    </Container>
  );
};

export default ProductDetails;
