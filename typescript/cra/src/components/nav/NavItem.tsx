import { useState, useEffect, memo, useMemo } from "react";
import { SVGIcon } from "..";
import { Link, useLocation } from "react-router-dom";
import { useMatchPath } from "../../hooks/useMatchPath";
import { 
  Collapse, 
  Divider, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText 
} from "@mui/material"
import { 
  DividerStyled, 
  ListSubheaderStyled, 
  ListItemButtonStyled, 
  ListItemTextStyled, 
  ListItemIconStyled, 
  NavItemArrow, 
  NavItemBullet, 
  NavItemType
} from "./";

const NavItemComponent = ({
  title,
  path,
  isExternalLink = false,
  divider,
  children,
  subheader,
  caption,
  icon,
  bullet,
  badge,
  active,
  disabled,
  depth = 1,
  styles
}: NavItemType ) => {
  const { pathname } = useLocation();
  const { match } = useMatchPath(pathname);

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  }

  const handleShow = () => {
    setOpen(true);
  }

  const handleHide = () => {
    setOpen(false);
  }

  useEffect(() => {
    if (!match) {
      handleToggle();
    }
  }, [pathname]);
    
  const hasChildren: boolean = useMemo(() => {
    return children !== undefined && children.items.length > 0;
  }, [children]);
 
  return (
    <>
      {divider ? (
        <DividerStyled sx={{ 
          mx: styles.ROOT_ITEM_PX          
        }}/>
      ) : (
        <ListItemButtonStyled depth={depth} styles={styles} onClick={handleToggle} sx={{ 
            paddingLeft: depth === 1 ? styles.ROOT_ITEM_PX : styles.ROOT_ITEM_PX + styles.INDENTION, 
            paddingRight: styles.ROOT_ITEM_PX
          }}>
          {icon && (
            <ListItemIconStyled depth={depth} styles={styles}>
              <SVGIcon icon={icon} />
            </ListItemIconStyled>
          )}

          {bullet && (
            <NavItemBullet depth={depth} styles={styles}/>
          )}

          {title && (
            <>
              {hasChildren ? (
                <ListItemTextStyled depth={depth} styles={styles} primary={title} />
              ) : (
                <>
                  {path && (
                    <Link to={path} style={{textDecoration: "none"}}>
                      <ListItemTextStyled depth={depth} styles={styles} primary={title} />
                    </Link>
                  )}
                </>
              )}
            </>
          )}
          
          {hasChildren && ( 
            <NavItemArrow depth={depth} styles={styles} active={open} /> 
          )}
        </ListItemButtonStyled>
      )}

      {hasChildren && (        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(children?.items as ReadonlyArray<NavItemType>).map((item, index) => (
              <NavItem
                key={`${index}-${item.title}`}
                depth={depth + 1}
                active={match}
                styles={styles}                
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
