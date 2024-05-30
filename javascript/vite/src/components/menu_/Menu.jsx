import { List } from '@mui/material';
import { Children } from 'react';
import { NavDefaultStylesConfig, NavItem } from './';
const Nav = ({
  direction,
  accordion,
  collapse,
  expand,
  hover,
  items,
  styles,
  sx,
  onLinksClick,
  children
}) => {
  const populateConfigFromMarkup = children => {
    const items = [];
    Children.map(children, child => {
      const name = child.type.render.name;
      if (name === 'NavItem') {
        const item = {
          ...child.props
        };
        Children.map(child.props.children, child2 => {
          const name2 = child2.type.render.name;
          if (name2 === 'NavItemButton') {
            if (child2.props.children) {
              item.wrapper = child2.props.children;
            }
          } else if (name2 === 'NavItemSub') {
            const child3 = child2.props.children[0] || child2.props.children;
            if (child3?.type.render.name === 'NavItem') {
              item.sub = {
                ...child2.props,
                items: populateConfigFromMarkup(child2.props.children)
              };
            } else {
              item.sub = {
                ...child2.props,
                wrapper: child2.props.children
              };
            }
          }
        });
        items.push(item);
      }
    });
    return items;
  };
  if (children) {
    items = populateConfigFromMarkup(children);
  }
  return <List sx={{
    width: '100%',
    ...sx
  }} component="nav" aria-labelledby="nav-list">
      {items.map((item, index) => <NavItem key={`${index}-${item.title}`} menu={false} collapse={collapse} expand={expand} styles={styles ?? NavDefaultStylesConfig()} onLinksClick={onLinksClick} {...item} />)}
    </List>;
};
export { Nav };