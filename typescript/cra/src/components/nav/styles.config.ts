import { Theme, useTheme } from '@mui/material';

const NavVerticalStylesConfig = ():any => {
  const theme = useTheme();

  return {
    INDENTION: 3.15,
    ROOT_ITEM_PX: 2,
    ROOT_ITEM_PY: 2,
    ROOT_ITEM_TITLE_FONT_SIZE: 15,
    ROOT_ITEM_TITLE_COLOR: theme.palette.grey["600"],  
    ROOT_ITEM_TITLE_FONT_WEIGHT: theme.typography.fontWeightBold,
    SUB_ITEM_PX: 2,
    SUB_ITEM_PY: 2,
    SUB_ITEM_TITLE_FONT_SIZE: 14,
    SUB_ITEM_TITLE_COLOR: theme.palette.grey["500"],  
    SUB_ITEM_TITLE_FONT_WEIGHT: theme.typography.fontWeightMedium
  }
};

export { NavVerticalStylesConfig };