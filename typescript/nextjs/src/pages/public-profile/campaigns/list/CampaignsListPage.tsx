import { Container } from '@/components/container';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { toAbsoluteUrl } from '@/utils/Assets';
import {Demo1Layout} from "@/layouts/demo1";
import CampaignsCardPage from "@/pages/public-profile/campaigns/card/CampaignsCardPage";

const CampaignsListPage = () => {
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

      <Container>Example content</Container>
    </>
  );
};

CampaignsListPage.getLayout = (page: React.ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  CampaignsListPage ;
