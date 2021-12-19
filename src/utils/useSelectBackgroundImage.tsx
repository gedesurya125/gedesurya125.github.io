import type {LabelType} from '../data/myProfile' 
import { navigationIcon } from "../data/myProfile";

/**
 * This use select background image based on label 
 * @returns background image
 */
const useSelectBackgroundImage = (label:LabelType) => {
  return navigationIcon.filter(nav => nav.label === label)[0].image;
};

export default useSelectBackgroundImage;
