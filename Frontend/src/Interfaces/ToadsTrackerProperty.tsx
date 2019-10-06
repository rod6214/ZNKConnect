import WPropertyBase from './WPropertyBase'; 
import WToadProperty from './WToadProperty';

interface ToadsTrackerProperty extends WPropertyBase {
    toads?: WToadProperty[];
}

export default ToadsTrackerProperty;