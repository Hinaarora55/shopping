'use strict';
import Base  from './base';
import Html  from './html';

export default class Dropdown extends Base {
    render() {
        return Html.call(this, this.props, this.state);
    }
}