import { useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { SVGIcon } from "..";
import { NavItemType } from "./types";

const NavItemComponent = ({
  title,
  divider,
  children,
  subheader,
  icon,
  bullet,
  badge,
  isChild,
  path,
  pl,
  indention
}: NavItemType & { pl: number, indention: number, isChild?: boolean }) => {

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const hasChildren: boolean = useMemo(() => {
    return children !== undefined && children.items.length > 0;
  }, [children]);

  return (
    <>
      {divider ? (
        <Divider />
      ) : (
        <ListItemButton onClick={handleClick} sx={{ pl: isChild ? pl + indention : 0 }}>
          {icon && (
            <ListItemIcon>
              <SVGIcon className="" svgClassName="" icon={icon}/>
            </ListItemIcon>
          )}
          {title && (
            <>
              {hasChildren ? (
                <ListItemText primary={title} />
              ) : (
                <>
                  {path && (
                    <Link to={path}>
                      <ListItemText primary={title} />
                    </Link>
                  )}
                </>
              )}
            </>
          )}
          {hasChildren && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
        </ListItemButton>
      )}

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {Array.isArray(children?.items) && (children?.items.map((item:NavItemType, index:number) => (
                <NavItem
                  key={`${index}-${item.title}`}
                  isChild={true}
                  pl={pl + indention}
                  indention={indention}
                  {...item}
                />
            ))) && children.items}
          </List>
        </Collapse>
      )}
    </>
  );
};

const NavItem = memo(NavItemComponent);
export { NavItem };
