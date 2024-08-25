import { KeenIcon } from '@/components';
import {
  Menu,
  MenuItem,
  MenuLink,
  MenuSub,
  MenuTitle,
  MenuSeparator,
  MenuToggle,
  MenuArrow,
  MenuIcon
} from '@/components/menu';
import { ChangeEvent, useEffect, useState } from 'react';
import { toAbsoluteUrl } from '@/utils';
import { DropdownUserLanguages } from './DropdownUserLanguages';
import { Link } from 'react-router-dom';
import { useSettings } from '@/providers/SettingsProvider';

const DropdownUser = () => {
  const { settings, updateSettings, storeSettings, getMode } = useSettings();

  const handleThemeMode = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('checked:' + event.target.checked);
    const newMode = event.target.checked ? 'dark' : 'light';
    
    storeSettings({
      mode: newMode
    });
  }

  const buildHeader = () => {
    return (
      <div className="flex items-center justify-between px-5 py-1.5 gap-1.5">
        <div className="flex items-center gap-2">
          <img className="size-9 rounded-full border-2 border-success" src={toAbsoluteUrl('/media/avatars/300-2.png')} alt=""/>
          <div className="flex flex-col gap-1.5">
            <Link to="/account/hoteme/get-stard" className="text-sm text-gray-800 hover:text-primary font-semibold leading-none">
              Cody Fisher
            </Link>
            <a href="mailto:c.fisher@gmail.com" className="text-xs text-gray-600 hover:text-primary font-medium leading-none">
              c.fisher@gmail.com
            </a>
          </div>
        </div>
        <span className="badge badge-xs badge-primary badge-outline">Pro</span>
      </div>
    )
  }

  const buildMenu = () => {
    return (
      <>
        <MenuSeparator/>
        <div className="flex flex-col">
          <MenuItem path="/public-profile/profiles/default">
            <MenuLink>
              <MenuIcon className="menu-icon">
                <KeenIcon icon="badge" />
              </MenuIcon>
              <MenuTitle>Public Profile</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem path="/account/home/user-profile">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="profile-circle" />
              </MenuIcon>
              <MenuTitle>My Profile</MenuTitle>
            </MenuLink>
          </MenuItem>
          <MenuItem
            toggle="dropdown"
            trigger="hover"
            dropdownProps={{
              placement: "left-start",
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [-50, 0], // [skid, distance]
                  }
                }
              ]
            }}
          >
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="setting-2"/>
              </MenuIcon>
              <MenuTitle>My Account</MenuTitle>
              <MenuArrow>
                <KeenIcon icon="right" className="text-3xs" />
              </MenuArrow>
            </MenuLink>
            <MenuSub className="menu-default light:border-gray-300 w-[200px]] md:w-[220px]">
              <MenuItem path="/account/home/get-started">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="coffee" />
                  </MenuIcon>
                  <MenuTitle>Get Started</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem path="/account/home/user-profile">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="some-files" />
                  </MenuIcon>
                  <MenuTitle>My Profile</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem path="/account/billing/basic">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="icon" />
                  </MenuIcon>
                  <MenuTitle>Billing</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem path="/account/security/overview">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="medal-star" />
                  </MenuIcon>
                  <MenuTitle>Security</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem path="/account/members/teams">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="setting" />
                  </MenuIcon>
                  <MenuTitle>Members & Roles</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuItem path="/account/integrations">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="switch" />
                  </MenuIcon>
                  <MenuTitle>Integrations</MenuTitle>
                </MenuLink>
              </MenuItem>
              <MenuSeparator />
              <MenuItem path="/account/security/overview">
                <MenuLink>
                  <MenuIcon>
                    <KeenIcon icon="shield-tick" />
                  </MenuIcon>
                  <MenuTitle>Notifications</MenuTitle>
                  <label className="switch switch-sm">                
                    <input name="check" type="checkbox" checked onChange={() => {}} value="1"/>
                  </label>
                </MenuLink>
              </MenuItem>
            </MenuSub>
          </MenuItem>
          <MenuItem path="https://devs.keenthemes.com">
            <MenuLink>
              <MenuIcon>
                <KeenIcon icon="message-programming"/>
              </MenuIcon>
              <MenuTitle>Dev Forum</MenuTitle>
            </MenuLink>
          </MenuItem>
          <DropdownUserLanguages/>
          <MenuSeparator/>
        </div>
      </>      
    )
  }

  const buildFooter = () => {
    return (
      <div className="flex flex-col">
        <div className="menu-item mb-0.5">
          <div className="menu-link">
            <span className="menu-icon">
              <KeenIcon icon="moon"/>
            </span>
            <span className="menu-title">
              Dark Mode
            </span>
            <label className="switch switch-sm">
              <input
                name="theme"
                type="checkbox"
                checked={settings.mode === 'dark'}
                onChange={handleThemeMode}
                value="1"
              />
            </label>
          </div>
        </div>

        <div className="menu-item px-4 py-1.5">
          <Link to="#" className="btn btn-sm btn-light justify-center">Log out</Link>
        </div>
      </div>
    )
  }

  return (
    <MenuSub 
      className="menu-default light:border-gray-300 w-[200px] md:w-[250px]" 
      rootClassName="p-0"
    >
      {buildHeader()}
      {buildMenu()}
      {buildFooter()}      
    </MenuSub>
  );
};

export { DropdownUser };
