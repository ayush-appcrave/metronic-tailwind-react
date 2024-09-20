import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';

import { GamerContent } from './_GamerContent';
import { KeenIcon } from '@/components';

const GamerPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/media/avatars/300-27.png')}
      className="rounded-full border-3 border-success max-h-[100px] max-w-full"
    />
  );

  return (
    <>
      <UserProfileHero
        name="Floyd Miles"
        image={image}
        info={[
          { label: 'SF, Bay Area', icon: 'geolocation' },
          { label: 'floydgg', icon: 'twitch' },
          { email: 'Level 22', icon: '' }
        ]}
      />

      <Container>
        <Navbar>
          {MENU_SIDEBAR[2]?.children && <NavbarMenu items={MENU_SIDEBAR[2].children} />}
          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Connect
            </button>
            <button className="dropdown-toggle btn btn-sm btn-light">
              <KeenIcon icon="plus-squared" /> Invite to Team
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <GamerContent />
      </Container>
    </>
  );
};

export { GamerPage };
