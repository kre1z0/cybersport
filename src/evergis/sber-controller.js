import SGisSberController from '../assets/sgis/SberController';

class SberController extends SGisSberController {
    static instance = null;
    constructor(...props) {
        if (SberController.instance) {
            return SberController.instance;
        }
        super(...props);
    }
}

export default SberController;
