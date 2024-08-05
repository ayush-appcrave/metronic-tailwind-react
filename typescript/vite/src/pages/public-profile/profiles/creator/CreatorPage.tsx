import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { useMenu } from '@/providers';
import { toAbsoluteUrl } from '@/utils/Assets';

import { CreatorContent } from '.';

const CreatorPage = () => {
  const { getMenuConfig } = useMenu();
  const secondaryMenu = getMenuConfig('secondary');

  const image = (
    <div className="flex items-center justify-center rounded-full border-2 border-danger-clarity h-[100px] w-[100px]">
      <img
        src={toAbsoluteUrl('/media/brand-logos/inferno.svg')}
        className="max-h-[50px] max-w-full size-11"
      />
    </div>
  );

  return (
    <>
      <UserProfileHero
        name="Inferno"
        image={image}
        info={[
          { label: 'inferno.com', icon: 'abstract-39' },
          { label: 'SF, Bay Area', icon: 'geolocation' },
          { email: 'jenny@kteam.com', icon: 'sms' }
        ]}
      />

      <Container>
        <Navbar>
          {MENU_SIDEBAR[2]?.children && <NavbarMenu items={MENU_SIDEBAR[2].children} />}
          <NavbarActions>Buttons</NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <CreatorContent />
      </Container>
    </>
  );
};

export { CreatorPage };
