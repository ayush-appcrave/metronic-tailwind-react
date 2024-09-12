import {
  KeenIcon,
  MenuArrow,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuSeparator,
  MenuSub,
  MenuTitle
} from '@/components';

const DropdownCard1 = () => {
  return (
    <MenuSub className="menu-default" rootClassName="w-full max-w-[200px]">
      <MenuItem path="/account/activity">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="cloud-change"/>
          </MenuIcon>
          <MenuTitle>Activity</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="share"/>
          </MenuIcon>
          <MenuTitle>Share</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuItem
        toggle="dropdown"
        trigger="hover"
        dropdownProps={{
          placement: "right-start",
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-15,   0] // [skid, distance]
              }
            }
          ]
        }}
      >
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="notification-status"/>
          </MenuIcon>
          <MenuTitle>Notifications</MenuTitle>
          <MenuArrow>
            <KeenIcon icon="right" className="text-3xs" />
          </MenuArrow>
        </MenuLink>
        <MenuSub className="menu-default" rootClassName="w-full max-w-[175px]">
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="sms" />
              </MenuIcon>
              <MenuTitle>Email</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="message-notify" />
              </MenuIcon>
              <MenuTitle>SMS</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/settings-sidebar">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="pencil" />
              </MenuIcon>
              <MenuTitle>Push</MenuTitle>
            </MenuLink>
          </MenuItem>
        </MenuSub>
      </MenuItem>
      <MenuItem path="#">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="dislike" />
          </MenuIcon>
          <MenuTitle>Report</MenuTitle>
        </MenuLink>
      </MenuItem>
      <MenuSeparator/>
      <MenuItem path="/account/home/settings-enterprise">
        <MenuLink>
          <MenuIcon>
            <KeenIcon icon="setting-3"/>
          </MenuIcon>
          <MenuTitle>Settings</MenuTitle>
        </MenuLink>
      </MenuItem>
    </MenuSub>
  );
};

export { DropdownCard1 };
