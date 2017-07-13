import {sortTypes} from '../tools/constants';

class ToolbarModel {
    constructor(props) {
        this.sort = sortTypes;
        this.groupby = [];
        this.name = "";
    }

}

export default ToolbarModel;