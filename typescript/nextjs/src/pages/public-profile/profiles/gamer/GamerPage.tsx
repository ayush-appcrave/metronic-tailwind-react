import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';

import { GamerContent } from './_GamerContent';
import {ReactElement} from "react";
import {Demo1Layout} from "@/layouts/demo1";
import FeedsPage from "@/pages/public-profile/profiles/feeds/FeedsPage";

const GamerPage = () => {
  const image = (
    <img
      src={toAbsoluteUrl('/images/content/avatars/300-11.jpg')}
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
          <NavbarActions>Buttons</NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <GamerContent />
      </Container>
    </>
  );
};

GamerPage.getLayout = (page: ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  GamerPage ;
