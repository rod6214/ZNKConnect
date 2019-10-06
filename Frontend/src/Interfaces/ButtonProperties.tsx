import WPropertyBase from './WPropertyBase';
import { Side, ButtonType } from '../Enums/Switchers';

interface NavbarProperties extends WPropertyBase {
    side: Side;
    type: ButtonType;
    link?: string;
    onclick?: () => void;
    value?: string;
}

export default NavbarProperties;
