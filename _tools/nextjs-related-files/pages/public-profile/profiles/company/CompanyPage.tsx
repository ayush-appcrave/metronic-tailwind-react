import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';

import { CompanyContent } from '.';

const CompanyPage = () => {
  const image = (
    <img src={toAbsoluteUrl('/images/content/logos/duolingo.png')} className="size-[100px]" />
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
          <NavbarActions>Buttons</NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <CompanyContent />
      </Container>
    </>
  );
};

export default  CompanyPage ;
