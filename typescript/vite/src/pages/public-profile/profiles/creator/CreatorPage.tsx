import { Container } from '@/components/container';
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
        src={toAbsoluteUrl('/images/content/brand-logos/inferno.svg')}
        className="max-h-[50px] max-w-full"
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
          {secondaryMenu && <NavbarMenu items={secondaryMenu} />}
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
