import { memo } from "react";
import KeenIconsConfig from "./config";
import { Box } from "@mui/material";
import { useSettings } from "../../providers/SettingsProvider";

type Props = {
  iconName: string;
  iconClass?: string;
  iconType?: string;
};

const KeenIconComponent = ({iconName, iconClass = "", iconType = ""}: Props) => {
  const { settings } = useSettings();
  const { keeniconsType } = settings;

  if (iconType === "") {
    iconType = keeniconsType;
  }

  return (
    <Box 
      className={`ki-${iconType} ki-${iconName} ${iconClass && " " + iconClass}`}
      component="i" 
    >
      {iconType === 'duotone' &&
        [...Array(KeenIconsConfig[iconName])].map((e, i) => {
          return (
            <span 
              key={`${iconType}-${iconName}-${iconClass}-path-${i + 1}`}
              className={`path${i + 1}`}
            >              
            </span>
          )
        })}
    </Box>
  );  
};

const KeenIcon = memo(KeenIconComponent);

const getKeenIcon = (iconName:string, iconClass?:string, iconType?:string) => {
  return (
    <KeenIcon 
      iconName={iconName} 
      {...(iconClass !== null && { iconClass: iconClass })}
      {...(iconType !== null && { iconType: iconType })}    
    />
  )
};

export { getKeenIcon, KeenIcon };
