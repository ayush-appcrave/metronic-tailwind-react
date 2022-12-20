import { useState, memo, useMemo } from "react";
import { SVGIcon } from "..";
import { Link } from "react-router-dom";
import { Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { 
  DividerStyled, 
  ListSubheaderStyled, 
  ListItemButtonStyled, 
  ListItemTextStyled, 
  ListItemIconStyled, 
  NavItemArrow, 
  NavItemBullet, 
  NavItemType } from "./";

const NavItemComponent = ({
  title,
  divider,
  children,
  subheader,
  icon,
  bullet,
  badge,
  isChild = false,
  path,
  gap,
  indention
}: NavItemType & { gap: number, indention: number }) => {

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const hasChildren: boolean = useMemo(() => {
    return children !== undefined && children.items.length > 0;
  }, [children]);
 
  return (
    <>
      {divider ? (
        <DividerStyled sx={{ 
          mx: gap          
        }}/>
      ) : (
        <ListItemButtonStyled onClick={handleClick} isChild={isChild} sx={{ 
            paddingLeft: isChild ? gap + indention : gap, 
            paddingRight: gap,
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
                <ListItemTextStyled isChild={isChild} primary={title} />
              ) : (
                <>
                  {path && (
                    <Link to={path} style={{textDecoration: "none"}}>
                      <ListItemTextStyled isChild={isChild} primary={title} />
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
