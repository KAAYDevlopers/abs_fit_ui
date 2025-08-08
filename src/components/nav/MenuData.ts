interface SubmenuItem {
  label: string;
  href: string;
}

interface MenuSection {
  heading: string;
  submenu: SubmenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  children?: MenuSection[];
}

export const menuData: MenuItem[] = [
  {
    label: "Proteins",
    href: "/proteins",
    children: [
      {
        heading: "Whey Proteins",
        submenu: [
          { label: "Whey Proteins", href: "/proteins/whey-proteins" },
          {
            label: "Whey Protein Isolates",
            href: "/proteins/whey-protein-isolates",
          },
          {
            label: "Hydrolyzed Proteins",
            href: "/proteins/hydrolyzed-proteins",
          },
          {
            label: "Beginners Whey Protein",
            href: "/proteins/beginners-whey-protein",
          },
        ],
      },
      {
        heading: "Specialty Proteins",
        submenu: [
          { label: "Raw Whey", href: "/proteins/raw-whey" },
          { label: "Whey Blends", href: "/proteins/whey-blends" },
          { label: "Egg Proteins", href: "/proteins/egg-proteins" },
        ],
      },
      {
        heading: "Plant Based",
        submenu: [
          { label: "Soy Proteins", href: "/proteins/soy-proteins" },
          { label: "Pea Proteins", href: "/proteins/pea-proteins" },
          { label: "Plant Protein", href: "/proteins/plant-protein" },
        ],
      },
      {
        heading: "Other Proteins",
        submenu: [
          { label: "Collagen", href: "/proteins/collagen" },
          { label: "Protein For Women", href: "/proteins/protein-for-women" },
        ],
      },
    ],
  },
  {
    label: "Gainers",
    href: "/gainers",
    children: [
      {
        heading: "Mass Gainers",
        submenu: [
          { label: "Weight Gainers", href: "/gainers/weight-gainers" },
          { label: "Mass Gainers", href: "/gainers/mass-gainers" },
          { label: "Lean Mass Gainer", href: "/gainers/lean-mass-gainer" },
          {
            label: "Herbal Weight Gainer",
            href: "/gainers/herbal-weight-gainer",
          },
        ],
      },
    ],
  },
  {
    label: "Pre/Intra Workouts",
    href: "/pre-intra-workouts",
    children: [
      {
        heading: "Pre Workout",
        submenu: [
          { label: "Pre-Workout", href: "/pre-intra-workouts/pre-workout" },
          { label: "Creatine", href: "/pre-intra-workouts/creatine" },
          { label: "Citrulline", href: "/pre-intra-workouts/citrulline" },
          { label: "Beta-Alanine", href: "/pre-intra-workouts/beta-alanine" },
        ],
      },
      {
        heading: "Intra/Post Workout",
        submenu: [
          { label: "Post-Workouts", href: "/pre-intra-workouts/post-workouts" },
          { label: "BCAAs", href: "/pre-intra-workouts/bcaas" },
          { label: "EAAs", href: "/pre-intra-workouts/eaas" },
          { label: "Glutamine", href: "/pre-intra-workouts/glutamine" },
        ],
      },
      {
        heading: "Recovery",
        submenu: [
          { label: "Carnitine", href: "/pre-intra-workouts/carnitine" },
          { label: "HMB", href: "/pre-intra-workouts/hmb" },
          { label: "Arginine", href: "/pre-intra-workouts/arginine" },
        ],
      },
    ],
  },
  {
    label: "Workout Essentials",
    href: "/workout-essentials",
    children: [
      {
        heading: "Health Support",
        submenu: [
          { label: "MultiVitamins", href: "/workout-essentials/multivitamins" },
          {
            label: "Fish Oil/Omega",
            href: "/workout-essentials/fish-oil-omega",
          },
          { label: "ZMA", href: "/workout-essentials/zma" },
        ],
      },
      {
        heading: "Performance",
        submenu: [
          {
            label: "Testosterone Support",
            href: "/workout-essentials/testosterone-support",
          },
          { label: "Fat Burner", href: "/workout-essentials/fat-burner" },
          { label: "L-Carnitine", href: "/workout-essentials/l-carnitine" },
        ],
      },
    ],
  },
  {
    label: "Protein Foods",
    href: "/protein-foods",
    children: [
      {
        heading: "Protein Snacks",
        submenu: [
          { label: "Protein Bars", href: "/protein-foods/protein-bars" },
          { label: "Protein Chips", href: "/protein-foods/protein-chips" },
          { label: "Protein Cookies", href: "/protein-foods/protein-cookies" },
        ],
      },
    ],
  },
];
