import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import { MenuItemType, useMenus } from "../../../../configs";
import { MenuItem } from "../../../../components/menu/MenuItem";

const Sidebar = () => {
  const { menus } = useMenus();
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Sidebar menu
        </ListSubheader>
      }
    >
      {(menus.verticalMenu as ReadonlyArray<MenuItemType>).map(
        (item, index) => (
          <MenuItem key={`${index}-${item.title}`} {...item} pl={0} />
        )
      )}
    </List>
  );
};

export { Sidebar };
