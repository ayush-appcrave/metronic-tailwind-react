import { Tooltip } from '@mui/material';
import { forwardRef } from 'react';

import {
  BadgeStyled,
  ListItemButtonStyled,
  ListItemIconStyled,
  ListItemTextStyled,
  NavItemArrow,
  NavItemBullet,
  NavItemButtonPropsType
} from '..';
import { KeenIcon } from '../keenicons';
import { DarkTooltip, LightTooltip } from '../tooltip';

const NavItemButton = forwardRef<HTMLDivElement | null, NavItemButtonPropsType>(
  function NavItemButton(props, ref) {
    const {
      depth = 1,
      menu,
      itemMenu,
      direction,
      toggle,
      accordion,
      active,
      here,
      hover,
      open,
      disabled,
      collapse,
      expand,
      color,
      styles,
      tabIndex,
      menuItemRef,
      handleToggle,
      minimize,
      icon,
      bullet,
      badge,
      title,
      tooltip,
      hasSub,
      arrow
    } = props;

    const btn = (
      <ListItemButtonStyled
        depth={depth}
        menu={menu}
        color={color}
        styles={styles}
        active={active}
        here={here}
        open={open}
        hover={hover}
        disabled={disabled}
        collapse={collapse}
        expand={expand}
        tabIndex={tabIndex}
        ref={menuItemRef}
        onClick={handleToggle}
      >
        {icon && (
          <ListItemIconStyled
            depth={depth}
            menu={menu}
            color={color}
            styles={styles}
            active={active}
            here={here}
            hover={hover}
            open={open}
            collapse={collapse}
          >
            {icon}
          </ListItemIconStyled>
        )}

        {bullet && (
          <NavItemBullet
            depth={depth}
            menu={menu}
            color={color}
            styles={styles}
            active={active}
            here={here}
            hover={hover}
            open={open}
            collapse={collapse}
          />
        )}

        {!minimize && title && (
          <ListItemTextStyled
            depth={depth}
            menu={menu}
            color={color}
            styles={styles}
            active={active}
            here={here}
            hover={hover}
            open={open}
            collapse={collapse}
            primary={title}
          />
        )}

        {!minimize && badge && (
          <BadgeStyled
            badgeContent={badge.content}
            color={badge.color}
            depth={depth}
            menu={menu}
            styles={styles}
          />
        )}

        {!minimize && hasSub && arrow && (
          <NavItemArrow
            depth={depth}
            menu={menu}
            itemMenu={itemMenu}
            toggle={toggle}
            direction={direction}
            accordion={accordion}
            color={color}
            styles={styles}
            active={active}
            here={here}
            open={open}
            hover={hover}
            collapse={collapse}
            icon={<KeenIcon icon="down" />}
          />
        )}
      </ListItemButtonStyled>
    );

    if (tooltip) {
      if (tooltip?.variant === 'light') {
        return (
          <LightTooltip
            describeChild
            title={tooltip.title}
            {...(tooltip.placement && { placement: tooltip.placement })}
          >
            {btn}
          </LightTooltip>
        );
      } else {
        return (
          <DarkTooltip
            describeChild
            title={tooltip.title}
            {...(tooltip.placement && { placement: tooltip.placement })}
          >
            {btn}
          </DarkTooltip>
        );
      }
    } else {
      return btn;
    }
  }
);

export { NavItemButton };
