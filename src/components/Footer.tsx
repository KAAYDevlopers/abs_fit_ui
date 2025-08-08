import {
  Box,
  Link,
  Typography,
  Container,
  IconButton,
  useTheme,
  styled,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const theme = useTheme();

  // Replace these with your own social media URLs
  const socialMediaLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        color: "text.secondary",
        py: 3,
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ flex: { xs: "1 1 100%", sm: "1 1 45%", md: "1 1 22%" } }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Brand Name
            </Typography>
            {/* Add your logo component or image here */}
          </Box>
          <Box sx={{ flex: { xs: "1 1 45%", sm: "1 1 22%", md: "1 1 18%" } }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              PRODUCT
            </Typography>
            <Link href="#" color="inherit" display="block">
              Features
            </Link>
            <Link href="#" color="inherit" display="block">
              Integrations
            </Link>
            <Link href="#" color="inherit" display="block">
              Pricing
            </Link>
            <Link href="#" color="inherit" display="block">
              FAQ
            </Link>
          </Box>
          <Box sx={{ flex: { xs: "1 1 45%", sm: "1 1 22%", md: "1 1 18%" } }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" display="block">
              Careers
            </Link>
            <Link href="#" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block">
              Terms of Service
            </Link>
          </Box>
          <Box sx={{ flex: { xs: "1 1 45%", sm: "1 1 22%", md: "1 1 18%" } }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" color="inherit" display="block">
              Public API
            </Link>
            <Link href="#" color="inherit" display="block">
              Documentation
            </Link>
            <Link href="#" color="inherit" display="block">
              Guides
            </Link>
          </Box>
          <Box sx={{ flex: { xs: "1 1 45%", sm: "1 1 22%", md: "1 1 18%" } }}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              component="a"
              href={socialMediaLinks.facebook}
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              component="a"
              href={socialMediaLinks.twitter}
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              component="a"
              href={socialMediaLinks.instagram}
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ pt: 4 }}
        >
          © {new Date().getFullYear()} Company Co. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
