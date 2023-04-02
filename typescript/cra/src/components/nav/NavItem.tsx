import { useState, useEffect, memo, useMemo } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useMatchPath } from "../../hooks/useMatchPath";
import { matchPath } from "../../utils/Router";
import { KeenIcon } from "../keenicons";
import { Link, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListItemButtonProps } from "@mui/material";
import { DividerStyled, ListSubheaderStyled, ListItemButtonStyled, ListItemTextStyled, ListItemIconStyled, BadgeStyled } from "..";
import { NavItemSub, NavItemArrow, NavItemBullet, NavItemType, NavItemOptionsType, NavConfigType } from "..";

const NavItemComponent = ({
  options,  
  collapse = false,
  expand = false,
  styles,
  depth = 1
}: NavItemType) => {
  const { pathname } = useLocation();

  const { title, path = "", externalLink, newTab = false, divider, children, subheader, caption, icon, bullet, badge } = options;

  const { match } = useMatchPath(path);

  const here: boolean = children?.items ? hasActiveChild(pathname, children.items as NavConfigType) : false;

  const active: boolean = match;

  const disabled: boolean = false;

  const [ open, setOpen ] = useState(here);

  const [ hover, setHover ] = useState(false);

  const handleMouseOver = () => { 
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

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
    if (match) {
      setOpen(true);
    }  
  }, [pathname]); 
    
  const hasChildren: boolean = useMemo(() => {
    return children !== undefined && children.items.length > 0;
  }, [children]); 

  const minimize: boolean = collapse && !expand;

  const renderContent = (
    <>
      {divider ? (
        <DividerStyled sx={{ 
          mx: styles.ITEM_PADDING_X
        }}/>
      ) : (
        <ListItemButtonStyled 
          onClick={handleToggle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          depth={depth} 
          styles={styles} 
          active={active} 
          here={here} 
          open={open} 
          hover={hover} 
          disabled={disabled} 
          collapse={collapse} 
          expand={expand}  
          sx={{ 
            paddingTop: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y, 
            paddingBottom: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y, 
            paddingLeft: depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION, 
            paddingRight: depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION, 
            marginBottom: depth === 1 ? styles.ROOT_ITEM_GAP : styles.SUB_ITEM_GAP, 
          }}
        >
          {icon && (
            <ListItemIconStyled depth={depth} styles={styles} active={active} here={here} hover={hover} open={open} disabled={disabled} collapse={collapse}>
              {icon}
            </ListItemIconStyled>
          )}

          {bullet && (
            <NavItemBullet depth={depth} styles={styles} active={active} here={here} hover={hover} open={open} disabled={disabled} collapse={collapse}/>
          )}

          {!minimize && title && (
            <ListItemTextStyled depth={depth} styles={styles} active={active} here={here} hover={hover} open={open} disabled={disabled} collapse={collapse} primary={title}/>
          )}

          {!minimize && badge && (
            <BadgeStyled badgeContent={badge.content} color={badge.color} depth={depth} styles={styles} active={active} hover={hover} here={here} open={open} disabled={disabled} collapse={collapse}/>
          )}
          
          {!minimize &&  hasChildren && ( 
            <NavItemArrow depth={depth} styles={styles} active={active} here={here} open={open} hover={hover} disabled={disabled} collapse={collapse} icon={(<KeenIcon icon="down"/>)}/> 
          )}
        </ListItemButtonStyled>
      )}

      {(!minimize && children !== undefined && children.items.length > 0) && (     
        <NavItemSub 
          variant={children?.variant ? children.variant : "inline"}
          direction={children?.direction ? children.direction : "vertical"} 
          accordion={children?.accordion ? children.accordion : false} 
          open={open}
          expand={expand} 
          depth={depth + 1} 
          items={children.items} 
          styles={styles} 
          collapse={collapse} 
        />
      )}
    </>
  );

  const renderMain = () => {
    if (externalLink) {
      const target = newTab === true ? '_blank' : '_self';

      return (
        <Link href={path} target={target} rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }   

    if (hasChildren) {
      return renderContent;
    }

    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  }
 
  return renderMain();
};

const hasActiveChild = (pathname: string, items: NavConfigType):boolean => {
  for (const item of items){
    if (item.path && matchPath(item.path, pathname)) {
      return true;
    } else if (item.children?.items) {
      return hasActiveChild(pathname, item.children.items as NavConfigType);
    } 
  }

  return false;
} 

const NavItem = memo(NavItemComponent);
export { NavItem };
