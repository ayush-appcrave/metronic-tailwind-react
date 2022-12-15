import { NavConfigType } from "../components/nav";
import { PATHS } from ".";

// Auth paths
const AUTH_PATHS: PATHS = {
  login: "/auth/login",
  register: "/auth/register",
  verify: "/auth/verify",
  resetPassword: "/auth/reset-password",
  newPassword: "/auth/new-password",
};

// General paths
const GENERAL_PATHS: PATHS = {
  comingSoon: "/coming-soon",
  maintenance: "/maintenance",
  pricing: "/pricing",
  payment: "/payment",
  about: "/about-us",
  contact: "/contact-us",
  faqs: "/faqs",
  page404: "/404",
  page500: "/500",
};

const COMMON_NAV: NavConfigType = {
  dashboards: [
    {
      title: "Multipurpose",
      path: "/dashboard",
      bullet: true,
      onClick: () => {
        console.log("New clicked");
      },
    },
    {
      title: "eCommerce",
      path: "/dashboard2",
      bullet: true,
      onClick: () => {
        console.log("New clicked 2");
      },
    },
    {
      title: "Marketing",
      path: "#marketing",
      bullet: true,
    },
    {
      title: "Crypto",
      path: "#crypto",
      bullet: true,
    },
    {
      title: "Projects",
      path: "#projects",
      bullet: true,
    },
  ],
  pages: [
    {
      title: "Page 1",
      path: "#pages/page-1",
      bullet: true,
    },
    {
      title: "Page 2",
      path: "#pages/page-1",
      bullet: true,
    },
    {
      title: "Page 3",
      path: "#pages/page-1",
      bullet: true,
    },
  ],
  authentication: [
    {
      title: "Page 1",
      path: "#auth/page-1",
      bullet: true,
    },
    {
      title: "Page 2",
      path: "#auth/page-2",
      bullet: true,
    },
    {
      title: "Page 3",
      path: "#auth/page-3",
      bullet: true,
    },
  ],
  account: [
    {
      title: "Page 1",
      path: "#account/page-1",
      bullet: true,
    },
    {
      title: "Page 2",
      path: "#account/page-2",
      bullet: true,
    },
    {
      title: "Page 3",
      path: "#account/page-3",
      bullet: true,
    },
  ],
  apps: [
    {
      title: "Page 1",
      path: "#apps/page-1",
      bullet: true,
    },
    {
      title: "Page 2",
      path: "#apps/page-2",
      bullet: true,
    },
    {
      title: "Page 3",
      path: "#apps/page-3",
      bullet: true,
    },
  ],
};

const VERTICAL_NAV: NavConfigType = [
  {
    title: "Dashboards",
    icon: "general/gen025.svg",
    children: {
      collapsible: true,
      items: COMMON_NAV.dashboards,
    },
  },
  {
    title: "Pages",
    icon: "general/gen024.svg",
    children: {
      collapsible: true,
      items: COMMON_NAV.pages,
    },
  },
  {
    title: "Authentication",
    icon: "general/gen023.svg",
    children: {
      collapsible: true,
      items: COMMON_NAV.authentication,
    },
  },
  {
    title: "Account",
    icon: "general/gen022.svg",
    children: {
      collapsible: true,
      items: COMMON_NAV.account,
    },
  },
  {
    title: "Apps",
    icon: "general/gen021.svg",
    children: {
      collapsible: true,
      items: COMMON_NAV.apps,
    },
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
    icon: "general/gen020.svg",
    path: "previews.keenthemes.com/hero/mui/docs",
  },
  {
    title: "Changelog",
    icon: "general/gen019.svg",
    path: "previews.keenthemes.com/hero/mui/docs/#/changelog",
  },
];

export { AUTH_PATHS, GENERAL_PATHS, COMMON_NAV, VERTICAL_NAV };
