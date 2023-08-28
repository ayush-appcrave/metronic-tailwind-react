import { useViewport } from '../../hooks';
import Scrollbar from '../scrollbar';
import { SettingsFormContainerWidth } from './SettingsFormContainerWidth';
import { SettingsFormDirection } from './SettingsFormDirection';
import { SettingsFormKeenIcons } from './SettingsFormKeenIcons';
import { SettingsFormMode } from './SettingsFormMode';

interface PropsType {
  headerHeight?: number;
  footerHeight?: number;
}

const SettingsBody = ({ headerHeight = 0, footerHeight = 0 }: PropsType) => {
  const [height] = useViewport();
  const scrollableHeight: number = height - headerHeight - footerHeight;

  return (
    <Scrollbar
      sx={{
        height: scrollableHeight,
        px: 2,
        mx: 1
      }}
    >
      <SettingsFormMode />
      <SettingsFormKeenIcons />
      <SettingsFormDirection />
      <SettingsFormContainerWidth />
    </Scrollbar>
  );
};

export { SettingsBody };
