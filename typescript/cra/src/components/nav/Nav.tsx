import { useState, useEffect, memo, useMemo } from "react";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { SVGIcon } from "..";
import { NavType, NavItemType } from "./types";
import { NavItem } from "./";

const NavComponent = ({
  variant = "inline",
	direction = "vertical",
	collapsible,
	height,
	maxHeight,
	items,
  sx,
  styles
}: NavType & { sx?: Object }) => {
    
  return (
    <List
      sx={{ 
        width: "100%", 
        ...sx 
      }}
      component="nav"
      aria-labelledby="nav-list"
    >
      {(items as ReadonlyArray<NavItemType>).map(
        (item, index) => (
          <NavItem 
            key={`${index}-${item.title}`}     
            depth={1}    
            styles={styles}
            {...item}                   
          />
        )
      )}
    </List>
  );
};

const Nav = memo(NavComponent);
export { Nav };
