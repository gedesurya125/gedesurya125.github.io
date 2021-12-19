import React, {forwardRef} from "react";
import { navigationIcon } from "../../data/myProfile";
import type { LabelType } from "../../data/myProfile";

interface IconProps {
  labelType: LabelType;
  className: string;
}
const LabelIcon = forwardRef<HTMLElement, IconProps>(
  ({ labelType, className }, ref) => {
   const iconClass = navigationIcon.filter((icon) => icon.label === labelType)[0]
     .iconClassName;
   return <i ref={ref} className={`${iconClass} ${className}`}></i>;
 }

)

export default LabelIcon;
