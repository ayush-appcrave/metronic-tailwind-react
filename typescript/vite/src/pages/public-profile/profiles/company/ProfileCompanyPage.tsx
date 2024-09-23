import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions, NavbarDropdown } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';
import { KeenIcon } from '@/components';

import { ProfileCompanyContent } from './';

const ProfileCompanyPage = () => {
  const image = (
    <div className="flex items-center justify-center rounded-full border-2 border-success-clarity h-[100px] w-[100px]">
      <img src={toAbsoluteUrl('/media/brand-logos/duolingo.svg')} className="size-[50px]" />
    </div>
  );

  return (
    <>
      <UserProfileHero
        name="Duolingo"
        image={image}
        info={[
          { label: 'Public Company', icon: 'abstract-41' },
          { label: 'Pittsburgh, KS', icon: 'geolocation' },
          { email: 'info@duolingo.com', icon: 'sms' }
        ]}
      />

      <Container>
        <Navbar>
          {MENU_SIDEBAR[2]?.children && <NavbarMenu items={MENU_SIDEBAR[2].children} />}
          <NavbarActions>
            <button type="button" className="btn btn-sm btn-primary">
              <KeenIcon icon="users" /> Follow
            </button>
            <button className="btn btn-sm btn-icon btn-light">
              <KeenIcon icon="messages" />
            </button>
            <NavbarDropdown />
          </NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <ProfileCompanyContent />
      </Container>
    </>
  );
};

export { ProfileCompanyPage };
