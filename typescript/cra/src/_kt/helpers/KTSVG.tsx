import { FC } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "./AssetHelpers";
type Props = {
  path: string;
  className?: string;
  svgClassName?: string;
};

// Example of usage:
//* <KTSVG path='/media/icons/duotune/finance/fin009.svg'
//*       className='svg-icon-3x svg-icon-primary mb-2'
//*        svgClassName='svg-custom-class'
//* />

const KTSVG: FC<Props> = ({ path, className = "", svgClassName = "" }) => {
  return (
    <span className={`svg-icon ${className}`}>
      <SVG src={toAbsoluteUrl(path)} className={svgClassName} />
    </span>
  );
};

export { KTSVG };
