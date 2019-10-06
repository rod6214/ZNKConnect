import WPropertyBase from './WPropertyBase'; 

interface WToadProperty extends WPropertyBase {
    title?: string;
    subtitle?: string;
    description?: string;
    buttonName?: string;
    src?: string;
    onclick?: () => void;
}

export default WToadProperty;