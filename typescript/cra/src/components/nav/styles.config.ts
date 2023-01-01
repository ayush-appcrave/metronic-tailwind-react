import { Theme, useTheme } from '@mui/material';

const NavVerticalStylesConfig = ():any => {
  const theme = useTheme();

  return {
    INDENTION: 1.70,
    ITEM_BORDER_RADIUS: 6,
    ROOT_ITEM_HEIGHT: 46,
    ROOT_ITEM_PADDING_X: 1.75,
    ROOT_ITEM_PADDING_Y: 1,
    ROOT_ITEM_GAP: '2px',
    ROOT_ITEM_TITLE_FONT_SIZE: 15,
    ROOT_ITEM_TITLE_COLOR: theme.palette.grey["600"],  
    ROOT_ITEM_TITLE_FONT_WEIGHT: theme.typography.fontWeightBold,
    SUB_ITEM_HEIGHT: 40,
    SUB_ITEM_PADDING_X: 1.75,
    SUB_ITEM_PADDING_Y: 0.75,
    SUB_ITEM_GAP: '3px',
    SUB_ITEM_TITLE_FONT_SIZE: 14,
    SUB_ITEM_TITLE_COLOR: theme.palette.grey["500"],  
    SUB_ITEM_TITLE_FONT_WEIGHT: theme.typography.fontWeightMedium
  }
};

export { NavVerticalStylesConfig };