import { useState, memo, useMemo } from "react";
import { Box } from "@mui/material";
import { NavItemBulletType } from "./types";


const NavItemBulletComponent = ({
  variant = "dot",
  active = false,
  here = false,
  open = false,
  disabled = false,
  collapse = false,
  hover = false,
  styles,
  depth = 1
}: NavItemBulletType) => {
 
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey["500"],
	      marginRight: (theme) => theme.spacing(1.15),
        ...(variant === "dot" && { 
          height: 4,
	        width: 4,
          borderRadius: "50%" 
        }),
        ...(variant === "bar" && { 
          height: 4,
	        width: 6,
          borderRadius: 4 
        }),
        ...(active && {
          backgroundColor: (theme) => theme.palette.primary.main
        }),
      }}
    >      
    </Box>
  );
};

const NavItemBullet = memo(NavItemBulletComponent);
export { NavItemBullet };
