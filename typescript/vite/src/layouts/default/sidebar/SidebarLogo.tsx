import { type SxProps } from '@mui/material/styles';
import { toAbsoluteUrl } from 'utils';

import { useDefaultLayout } from '../DefaultLayoutProvider';

interface Props {
  sx?: SxProps;
}

const SidebarLogo = ({ sx }: Props) => {
  const { isSidebarExpand, isSidebarCollapse } = useDefaultLayout();

  return (
    <a href="/" style={{ lineHeight: '0px' }}>
      <img
        src={toAbsoluteUrl('/media/logos/default.svg')}
        alt="logo"
        style={{
          display: !isSidebarExpand && isSidebarCollapse ? 'none' : 'inline-block',
          height: '30px',
          maxWidth: 'none',
          cursor: 'pointer'
        }}
      />

      <img
        src={toAbsoluteUrl('/media/logos/default-mini.svg')}
        alt="logo"
        style={{
          display: !isSidebarExpand && isSidebarCollapse ? 'inline-block' : 'none',
          height: '30px',
          maxWidth: 'none',
          cursor: 'pointer'
        }}
      />
    </a>
  );
};

export { SidebarLogo };
