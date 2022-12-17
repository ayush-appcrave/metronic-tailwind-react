import { memo } from "react";
import { toAbsoluteUrl } from "../../utils";

type Props = {
  icon: string;
  path?: string;
  size?: string;
};

const IconComponent = ({
  icon,
  path = "/media/icons/duotune/",
  size = "24px",
}: Props) => (
  <>
  </>
);

const Icon = memo(IconComponent);
export { Icon };
