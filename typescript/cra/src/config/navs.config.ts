import { NavConfigType } from "../components/nav";
import { getKeenIcon } from "../components/keenicons";
import { PathsType } from ".";

// Auth paths
const PATHS_AUTH: PathsType = {
  login: "/auth/login",
  register: "/auth/register",
  verify: "/auth/verify",
  resetPassword: "/auth/reset-password",
  newPassword: "/auth/new-password",
};

// General paths
const PATHS_GENERAL: PathsType = {
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

const NAV_COMMON: { [key: string]: NavConfigType } = {
  dashboards: [
    {
      key: 'dashboards-multipurpose',
      title: "Multipurpose",
      path: "/dashboard",
      bullet: true,
      badge: {
        content: "New",
        color: "success"
      },
      onClick: () => {
        console.log("New clicked");
      },
    },
    {
      key: 'dashboards-eCommerce',
      title: "eCommerce",
      path: "/dashboard2",
      bullet: true,
      onClick: () => {
        console.log("New clicked 2");
      },
    },
    {
      key: 'dashboards-eCommerce',
      title: "Marketing",
      path: "/marketing",
      bullet: true,
    },
    {
      key: 'dashboards-eCommerce',
      title: "Crypto",
      path: "https://keenthemes.com",
      externalLink: true,
      newTab: true,
      bullet: true,
    },
    {
      key: 'dashboards-Projects',
      title: "Projects",
      path: "https://keenthemes.com",
      externalLink: true,
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

const NAV_VERTICAL: NavConfigType = [
  {
    title: "Dashboards",
    icon: getKeenIcon("calendar"),
    children: {
      accordion: true,
      items: NAV_COMMON.dashboards,
    },
  },
  {
    title: "Pages",
    icon: getKeenIcon("calendar"),
    children: {
      accordion: true,
      items: NAV_COMMON.pages,
    },
  },
  {
    title: "Authentication",
    icon: getKeenIcon("calendar"),
    children: {
      accordion: true,
      items: NAV_COMMON.authentication,
    },
  },
  {
    title: "Account",
    icon: getKeenIcon("calendar"),
    children: {
      accordion: true,
      items: NAV_COMMON.account,
    },
  },
  {
    title: "Apps",
    icon: getKeenIcon("calendar"),
    children: {
      accordion: true,
      items: NAV_COMMON.apps,
    },
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
    icon: getKeenIcon("calendar"),
    path: "previews.keenthemes.com/hero/mui/docs",
  },
  {
    title: "Changelog",
    icon: getKeenIcon("calendar"),
    path: "previews.keenthemes.com/hero/mui/docs/#/changelog",
  },
];

export { PATHS_AUTH, PATHS_GENERAL, NAV_COMMON, NAV_VERTICAL };