import { Container } from '@/components/container';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { useMenu } from '@/providers';
import { toAbsoluteUrl } from '@/utils/Assets';

import { BloggerContent } from '@/pages/public-profile/profiles/blogger/index';
import {Demo1Layout} from "@/layouts/demo1";

const BloggerPage = () => {
  const { getMenuConfig } = useMenu();
  const secondaryMenu = getMenuConfig('secondary');

  const image = (
    <img
      src={toAbsoluteUrl('/images/content/avatars/300-2.jpg')}
      className="rounded-full border-3 border-success max-h-[100px] max-w-full"
    />
  );

  return (
    <>
      <UserProfileHero
        name="Inferno"
        image={image}
        info={[
          { label: 'KeenThemes', icon: 'dribbble' },
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
        <BloggerContent />
      </Container>
    </>
  );
};

BloggerPage.getLayout = (page: React.ReactElement) => <Demo1Layout>{page}</Demo1Layout>;

export default  BloggerPage ;
