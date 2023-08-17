import { List } from '@mui/material';
import { Children, isValidElement } from 'react';

import {
  NavConfigType,
  NavDefaultStylesConfig,
  NavItem,
  NavItemPropsType,
  NavItemSubConfigType,
  NavPropsType
} from './';

const Nav = ({
  direction,
  accordion,
  collapse,
  expand,
  hover,
  items,
  styles,
  sx,
  children
}: NavPropsType) => {
  const populateConfigFromMarkup = (children: any) => {
    const items: NavConfigType = [];

    Children.map(children, (child) => {
      const name = child.type.render.name;

      if (name === 'NavItem') {
        const item = { ...(child.props as NavItemPropsType) };

        Children.map(child.props?.children, (child2) => {
          const name2 = child2.type?.render?.name;

          if (name2 === 'NavItemButton') {
            if (child2.props.children) {
              item.button = child2.props.children;
            }
          } else if (name2 === 'NavItemSub') {
            item.sub = {
              ...(child2.props satisfies NavItemSubConfigType),
              items: populateConfigFromMarkup(child2.props.children)
            };
          }
        });

        items?.push(item);
      }
    });

    return items;
  };

  if (children) {
    items = populateConfigFromMarkup(children);
  }

  return (
    <List
      sx={{
        width: '100%',
        ...sx
      }}
      component="nav"
      aria-labelledby="nav-list"
    >
      {(items as readonly NavItemPropsType[]).map((item, index) => (
        <NavItem
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          key={`${index}-${item.title}`}
          menu={false}
          collapse={collapse}
          expand={expand}
          styles={styles ?? NavDefaultStylesConfig()}
          {...item}
        />
      ))}
    </List>
  );
};

export { Nav };
