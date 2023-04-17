import { Container, SxProps, Theme } from '@mui/material';
import { useSettings } from "../../providers/SettingsProvider";

export type PageContainerProps = {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const PageContainer = ({ children, sx }: PageContainerProps) => {
	const { settings } = useSettings();
  const { container } = settings;

  return (
    <Container 
			maxWidth={container === "fixed" ? 'lg' : false}
			sx={sx}
		>
      {children}
    </Container>
  );
}

export { PageContainer };