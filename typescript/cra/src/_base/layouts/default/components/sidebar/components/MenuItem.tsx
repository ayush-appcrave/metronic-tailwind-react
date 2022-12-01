import { useState, memo, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { SVGIcon } from "@base/components";
import { MenuItemType } from "app/setup/configs";

const MenuItemComponent = ({
  title,
  divider,
  children,
  icon,
  pl = 0,
  isChild,
  path,
}: MenuItemType & { pl: number; isChild?: boolean }) => {
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
        <ListItemButton onClick={handleClick} sx={{ pl: isChild ? pl + 4 : 0 }}>
          {icon && (
            <ListItemIcon>
              <SVGIcon className="" svgClassName="" icon={icon} />
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
            {children?.items.map((item, index) => (
              <MenuItem
                key={`${index}-${item.title}`}
                isChild={true}
                pl={pl + 4}
                {...item}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const MenuItem = memo(MenuItemComponent);
export { MenuItem };
