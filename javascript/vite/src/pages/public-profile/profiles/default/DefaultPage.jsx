import { Container } from '@/components/container';
import { UserProfileHero } from '@/partials/heros';
import { NavbarMenu } from '@/partials/menu/NavbarMenu';
import { Navbar, NavbarActions } from '@/partials/navbar';
import { useMenu } from '@/providers';
import { toAbsoluteUrl } from '@/utils/Assets';
import { DefaultContent } from '.';
const DefaultPage = () => {
  const {
    getMenuConfig
  } = useMenu();
  const secondaryMenu = getMenuConfig('secondary');
  const image = <img src={toAbsoluteUrl('/images/content/avatars/300-2.jpg')} className="rounded-full border-3 border-success max-h-[100px] max-w-full" />;
  return <>
      <UserProfileHero name="Jenny Klabber" image={image} info={[{
      label: 'KeenThemes',
      icon: 'abstract'
    }, {
      label: 'SF, Bay Area',
      icon: 'geolocation'
    }, {
      email: 'jenny@kteam.com',
      icon: 'sms'
    }]} />

      <Container>
        <Navbar>
          {secondaryMenu && <NavbarMenu items={secondaryMenu} />}
          <NavbarActions>Buttons</NavbarActions>
        </Navbar>
      </Container>

      <Container>
        <DefaultContent />
      </Container>
    </>;
};
export { DefaultPage };