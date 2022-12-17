import { useState, memo, useMemo } from "react";
import { SVGIcon } from "..";
import { Link } from "react-router-dom";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListSubheaderStyled, ListItemButtonStyled, ListItemIconStyled, NavItemArrow, NavItemBullet, NavItemType } from "./";

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
        <ListItemButtonStyled onClick={handleClick} sx={{ pl: isChild ? pl + indention : 0 }}>
          {icon && (
            <ListItemIconStyled>
              <SVGIcon icon={icon} />
            </ListItemIconStyled>
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
          
          {hasChildren && ( 
            <NavItemArrow active={open} /> 
          )}
        </ListItemButtonStyled>
      )}

      {hasChildren && (        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(children?.items as ReadonlyArray<NavItemType>).map((item, index) => (
              <NavItem
                key={`${index}-${item.title}`}
                isChild={true}
                pl={pl + indention}
                indention={indention}
                {...item}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const NavItem = memo(NavItemComponent);
export { NavItem };
