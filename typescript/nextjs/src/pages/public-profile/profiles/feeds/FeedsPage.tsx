import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';

import { FeedsContent } from '.';
import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import DefaultPage from "@/pages/public-profile/profiles/default/DefaultPage";

const FeedsPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/images/content/avatars/300-2.jpg')}
      className="rounded-full border-3 border-success max-h-[100px] max-w-full"
    />
  );

  return (
    <>
      <UserProfileHero
        name="Jenny Klabber"
        image={image}
        info={[
          { label: 'KeenThemes', icon: 'abstract' },
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
        <FeedsContent />
      </Container>
    </>
  );
};

FeedsPage.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  FeedsPage ;
