import { FC } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "@base/helpers";
type Props = {
  icon: string;
  path?: string;
  size?: string;
  className?: string;
  svgClassName?: string;
};

// Example of usage:
//* <SVG
//*   path='/media/icons/duotune/'
//*   icon="finance/fin009.svg"
//*   className='svg-icon-3x svg-icon-primary mb-2'
//*   svgClassName='svg-custom-class'
//* />

const SVGIcon: FC<Props> = ({
  icon,
  path = "/media/icons/duatone",
  size = "24px",
  className = "",
  svgClassName = "",
}) => {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG
        src={toAbsoluteUrl(path + icon)}
        width={size}
        height={size}
        className={svgClassName}
      />
    </span>
  );
};

export { SVGIcon };
