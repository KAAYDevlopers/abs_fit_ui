import * as React from "react";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductCard from "../components/ProductCard";
import { Box, Container, Typography, Button } from "@mui/material";
import api from "../infra/api";
import { actions } from "../redux/slices/ProductCatalogSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { Product } from "../types";
import styles from "../styles/pages/Dashboard.module.scss";

// Styled components replaced with SCSS module classes

// Dummy data for fallback
const dummyProducts: Product[] = [
  {
    id: 1,
    name: "absFitness Essential Whey 25gm Protein",
    productName: "absFitness Essential Whey 25gm Protein",
    price: 2599,
    buyPrice: 4299,
    productVariants: [{ buyPrice: 4299, onSalePrice: 2599 }],
    brand: "absFitness",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 2,
    name: "absFitness My Whey Protein Concentrate 24g Protein",
    productName: "absFitness My Whey Protein Concentrate 24g Protein",
    price: 2099,
    buyPrice: 3240,
    productVariants: [{ buyPrice: 3240, onSalePrice: 2099 }],
    brand: "absFitness",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 3,
    name: "absFitness Shield Whey with 12 Herbal Boosters",
    productName: "absFitness Shield Whey with 12 Herbal Boosters",
    price: 2399,
    buyPrice: 3999,
    productVariants: [{ buyPrice: 3999, onSalePrice: 2399 }],
    brand: "absFitness",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 4,
    name: "absFitness Iso Cool 25g Protein, Whey Protein Isolate",
    productName: "absFitness Iso Cool 25g Protein, Whey Protein Isolate",
    price: 2899,
    buyPrice: 4625,
    productVariants: [{ buyPrice: 4625, onSalePrice: 2899 }],
    brand: "absFitness",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
];

const bestSellersData: Product[] = [
  {
    id: 5,
    name: "Ultimate Nutrition ISO Sensation 93",
    productName: "Whey Protein Isolate Powder",
    price: 7999,
    buyPrice: 10999,
    productVariants: [{ buyPrice: 10999, onSalePrice: 7999 }],
    brand: "Ultimate Nutrition",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 6,
    name: "Ultimate Nutrition Prostar 100% Whey Protein",
    productName: "Ultimate Nutrition Prostar 100% Whey Protein",
    price: 6999,
    buyPrice: 9499,
    productVariants: [{ buyPrice: 9499, onSalePrice: 6999 }],
    brand: "Ultimate Nutrition",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 7,
    name: "Dymatize Nutrition ISO 100 Whey Protein Powder",
    productName: "Dymatize Nutrition ISO 100 Whey Protein Powder",
    price: 10999,
    buyPrice: 16999,
    productVariants: [{ buyPrice: 16999, onSalePrice: 10999 }],
    brand: "Dymatize",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
  {
    id: 8,
    name: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein",
    productName: "Optimum Nutrition (ON) Gold Standard 100% Whey Protein",
    price: 3349,
    buyPrice: 7899,
    productVariants: [{ buyPrice: 7899, onSalePrice: 3349 }],
    brand: "Optimum Nutrition",
    imageUrl:
      "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/f7cc6d82-6cd1-490f-922f-0b17bf8e0b25/1b46a7a6-9402-4645-8237-9d70e149a752-720x-1.webp",
  },
];

const topCategories = [
  {
    name: "Multivitamins",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
  {
    name: "Whey Protein Isolate",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
  {
    name: "Creatine",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
  {
    name: "Omega/Fish Oil",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
  {
    name: "Whey Protein",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
  {
    name: "Mass Gainer",
    image: "https://cdn-icons-png.flaticon.com/512/2833/2833912.png",
  },
];

const Dashboard: React.FC = () => {
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [absFitnessProducts, setabsFitnessProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const products = useAppSelector(
    (state: any) => state.ProductCatalog.products
  );
  const dispatch = useAppDispatch();

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api(
        "GET",
        `catalog/product/listproducts?page=0&size=10`
      );
      if (response && response.content && response.content.length > 0) {
        const apiProducts = response.content;
        dispatch(actions.SET_PRODUCTS(apiProducts));

        // Split products for different sections
        setBestSellers(apiProducts.slice(0, 4));
        setabsFitnessProducts(apiProducts.slice(4, 8));
      } else {
        // Fallback to dummy data
        setBestSellers(bestSellersData);
        setabsFitnessProducts(dummyProducts);
        dispatch(actions.SET_PRODUCTS([...bestSellersData, ...dummyProducts]));
      }
    } catch (error) {
      console.error("API failed, using dummy data:", error);
      // Fallback to dummy data
      setBestSellers(bestSellersData);
      setabsFitnessProducts(dummyProducts);
      dispatch(actions.SET_PRODUCTS([...bestSellersData, ...dummyProducts]));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h4" textAlign="center">
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Carousel />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Best Sellers Section */}
        <Box className={styles.styledSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h4" fontWeight="600" color="#333">
              Our Top Sellers
            </Typography>
            <Button variant="outlined" className={styles.viewAllButton}>
              View all
            </Button>
          </Box>
          <Box className={styles.productGrid}>
            {bestSellers.map((product: Product, index: number) => (
              <ProductCard key={`bestseller-${index}`} product={product} />
            ))}
          </Box>
        </Box>

        {/* Top Categories Section */}
        <Box className={styles.styledSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h4" fontWeight="600" color="#333">
              Top Categories
            </Typography>
            <Button variant="outlined" className={styles.viewAllButton}>
              Shop by Category
            </Button>
          </Box>
          <Box className={styles.categoryGrid}>
            {topCategories.map((category, index) => (
              <Box key={index} className={styles.categoryCard}>
                <img
                  className={styles.categoryImage}
                  src={category.image}
                  alt={category.name}
                />
                <Typography variant="h6" textAlign="center" fontWeight="500">
                  {category.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Best Sellers (Alternative Section) */}
        <Box className={styles.styledSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h4" fontWeight="600" color="#333">
              Best Sellers
            </Typography>
            <Button variant="outlined" className={styles.viewAllButton}>
              View all
            </Button>
          </Box>
          <Box className={styles.productGrid}>
            {absFitnessProducts.map((product: Product, index: number) => (
              <ProductCard key={`absFitness-${index}`} product={product} />
            ))}
          </Box>
        </Box>
        {/* Plan based product products */}
        <Box className={styles.styledSection}>
          <Box className={styles.sectionHeader}>
            <Typography variant="h4" fontWeight="600" color="#333">
              Plant Based Proteins
            </Typography>
            <Button variant="outlined" className={styles.viewAllButton}>
              View all
            </Button>
          </Box>
          <Box className={styles.productGrid}>
            {absFitnessProducts.map((product: Product, index: number) => (
              <ProductCard key={`absFitness-${index}`} product={product} />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
