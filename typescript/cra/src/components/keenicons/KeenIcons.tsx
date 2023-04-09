import { memo } from "react";
import KeenIconsConfig from "./config";
import { Box } from "@mui/material";
import { SxProps, Theme } from '@mui/material/styles';
import { useSettings } from "../../providers/SettingsProvider";

type Props = {
  icon: string;
  style?: string;
  className?: string;
  sx?: SxProps<Theme>;
};

const KeenIconComponent = ({icon, style = "", className = "", sx}: Props) => {
  const { settings } = useSettings();
  const { keenicons } = settings;

  if (style === "") {
    style = keenicons;
  }

  return (
    <Box 
      className={`ki-${style} ki-${icon} ${className && " " + className}`}
      component="i" 
      {...(sx && { sx: sx })}    
    >
      {style === 'duotone' &&
        [...Array(KeenIconsConfig[icon])].map((e, i) => {
          return (
            <span 
              key={`${style}-${icon}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            >              
            </span>
          )
        })}
    </Box>
  );  
};

const KeenIcon = memo(KeenIconComponent);

export { KeenIcon };
