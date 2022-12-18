import { useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
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
  indention = 0,
  sx  
}: NavType & { indention: number, sx?: Object }) => {

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
            gap={1}
            indention={indention}               
            {...item}                   
          />
        )
      )}
    </List>
  );
};

const Nav = memo(NavComponent);
export { Nav };
