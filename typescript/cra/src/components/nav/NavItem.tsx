import { useState, memo, useMemo } from "react";
import { SVGIcon } from "..";
import { Link } from "react-router-dom";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ListSubheaderStyled, ListItemButtonStyled, ListItemTextStyled, ListItemIconStyled, NavItemArrow, NavItemBullet, NavItemType } from "./";

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
  gap,
  indention,
  level = 1
}: NavItemType & { gap: number, indention: number, level?:number, isChild?: boolean }) => {

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
        <ListItemButtonStyled onClick={handleClick} sx={{ 
            marginLeft: isChild ? gap + indention : 0, 
            marginRight: isChild ? gap : 0,
          }}>
          {icon && (
            <ListItemIconStyled>
              <SVGIcon icon={icon} />
            </ListItemIconStyled>
          )}

          {bullet && (
            <NavItemBullet/>
          )}

          {title && (
            <>
              {hasChildren ? (
                <ListItemTextStyled level={level} primary={title} />
              ) : (
                <>
                  {path && (
                    <Link to={path} style={{textDecoration: "none"}}>
                      <ListItemTextStyled level={level} primary={title} />
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
                gap={gap}
                indention={indention}  
                {...item} 
                level={level+1}     
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
