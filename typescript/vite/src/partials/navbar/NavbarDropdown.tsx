import { Menu, MenuIcon, MenuItem, MenuLabel, MenuLink, MenuSub, MenuTitle, MenuToggle } from '@/components/menu';
import { INavbarActionsProps } from './types';
import { KeenIcon } from '@/components/keenicons';
import { Fragment, useRef, useState } from 'react';
import { ModalGiveAward } from '../modals/give-award';

const NavbarDropdown = () => {
	const itemRef = useRef<any>(null);

  const [giveAwardModalOpen, setGiveAwardModalOpen] = useState(false);
  const handleGiveAwardModalOpen = () => { 
		setGiveAwardModalOpen(true) 
		itemRef.current?.hide();
	};
  const handleGiveAwardModalClose = () => {
    setGiveAwardModalOpen(false);
  };
	
	return (
		<Fragment>
			<Menu className="items-stretch">
				<MenuItem
					ref={itemRef}
					toggle="dropdown"
					trigger="click"
					dropdownProps={{
						placement: 'bottom-end',
						modifiers: [
							{
								name: 'offset',
								options: {
									offset: [0, 10] // [skid, distance]
								}
							}
						]
					}}
				>
					<MenuToggle className="btn btn-sm btn-icon btn-light">
						<KeenIcon icon="dots-vertical" />
					</MenuToggle>
					<MenuSub className="menu-default" rootClassName="w-full max-w-[220px]">
						<MenuItem>
							<MenuLabel>
								<MenuIcon>
									<KeenIcon icon="cloud-change"/>
								</MenuIcon>
								<MenuTitle>Share Profile</MenuTitle>
							</MenuLabel>
						</MenuItem>
						<MenuItem onClick={handleGiveAwardModalOpen}>
							<MenuLabel>
								<MenuIcon>
									<KeenIcon icon="cloud-change"/>
								</MenuIcon>
								<MenuTitle>Give Award</MenuTitle>
							</MenuLabel>
						</MenuItem>
						<MenuItem>
							<MenuLabel>
								<MenuIcon>
									<KeenIcon icon="cloud-change"/>
								</MenuIcon>
								<MenuTitle>Activity</MenuTitle>
							</MenuLabel>
						</MenuItem>
						<MenuItem>
							<MenuLabel>
								<MenuIcon>
									<KeenIcon icon="cloud-change"/>
								</MenuIcon>
								<MenuTitle>Activity</MenuTitle>
							</MenuLabel>
						</MenuItem>
					</MenuSub> 
				</MenuItem>
			</Menu>
			<ModalGiveAward open={giveAwardModalOpen} onClose={handleGiveAwardModalClose}/>
		</Fragment>		
	)
};

export { NavbarDropdown };




