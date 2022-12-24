import { useState, useEffect, memo, useMemo } from "react";
import { SVGIcon } from "..";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { useMatchPath } from "../../hooks/useMatchPath";
import { matchPath } from "../../utils/Router";
import { Link, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, ListItemButtonProps } from "@mui/material";
import { DividerStyled, ListSubheaderStyled, ListItemButtonStyled, ListItemTextStyled, ListItemIconStyled, BadgeStyled } from "..";
import { NavItemArrow, NavItemBullet, NavItemType, NavItemOptionsType, NavConfigType } from "..";

const NavItemComponent = ({
  options,  
  collapse = false,
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

  const renderItemContent = (
    <>
      {divider ? (
        <DividerStyled sx={{ 
          mx: styles.ITEM_PADDING_X
        }}/>
      ) : (
        <ListItemButtonStyled depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse} onClick={handleToggle} sx={{ 
            paddingTop: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y, 
            paddingBottom: depth === 1 ? styles.ROOT_ITEM_PADDING_Y : styles.SUB_ITEM_PADDING_Y, 
            paddingLeft: depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION, 
            paddingRight: depth === 1 ? styles.ROOT_ITEM_PADDING_X : styles.SUB_ITEM_PADDING_X + styles.INDENTION, 
            marginBottom: depth === 1 ? styles.ROOT_ITEM_GAP : styles.SUB_ITEM_GAP, 
          }}>
          {icon && (
            <ListItemIconStyled depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse}>
              <SVGIcon icon={icon} />
            </ListItemIconStyled>
          )}

          {bullet && (
            <NavItemBullet depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse}/>
          )}

          {title && (
            <ListItemTextStyled depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse} primary={title}/>
          )}

          {badge && (
            <BadgeStyled badgeContent={badge.content} color={badge.color} depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse}/>
          )}
          
          {hasChildren && ( 
            <NavItemArrow depth={depth} styles={styles} active={active} here={here} open={open} disabled={disabled} collapse={collapse}/> 
          )}
        </ListItemButtonStyled>
      )}

      {hasChildren && (        
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(children?.items as ReadonlyArray<NavItemOptionsType>).map((item, index) => (
              <NavItem key={`${index}-${item.title}`} depth={depth + 1} options={item} styles={styles} collapse={collapse}/>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );

  const renderItem = () => {
    if (externalLink) {
      const target = newTab === true ? '_blank' : '_self';

      return (
        <Link href={path} target={target} rel="noopener" underline="none">
          {renderItemContent}
        </Link>
      );
    }   

    if (hasChildren) {
      return renderItemContent;
    }

    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderItemContent}
      </Link>
    );
  }
 
  return renderItem();
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
