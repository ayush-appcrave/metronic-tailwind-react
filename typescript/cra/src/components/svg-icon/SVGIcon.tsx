import { memo } from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../utils';
interface Props {
  icon: string;
  path?: string;
  size?: string;
  className?: string;
  svgClassName?: string;
}

// Example of usage:
//* <SVGIcon
//*   path='/media/icons/duotune/'
//*   icon="finance/fin009.svg"
//*   className='svg-icon-3x svg-icon-primary mb-2'
//*   svgClassName='svg-custom-class'
//* />

const SVGIconComponent = ({
  icon,
  path = '/media/icons/',
  size = '1rem',
  className = '',
  svgClassName = ''
}: Props) => (
  <SVG src={toAbsoluteUrl(path + icon)} width={size} height={size} className={svgClassName} />
);

const SVGIcon = memo(SVGIconComponent);
export { SVGIcon };
