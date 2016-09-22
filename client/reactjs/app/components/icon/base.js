'use strict';
import { Component } from 'react';
import Class from 'classnames';


class Base extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.cls = this.cls.bind(this);
        this.badge_cls = this.badge_cls.bind(this);

    }

    cls() {
        if (this.props.options['icon']['name'].trim().substring(0, 10) == 'glyphicon ') {
            return this.props.options['icon']['name'];
        } else if (this.props.options['icon']['name'].trim().substring(0, 10) == 'glyphicon-') {
            return ("glyphicon " + this.props.options['icon']['name']);
        } else if (this.props.options['icon']['name'].trim().substring(0, 2) == 'fa') {
            return ("fa " + this.props.options['icon']['name']);
        } else {
            this.material_icon_text = this.props.options['icon']['name'];
            return "material-icons"
        }
    }

    badge_cls() {
        if (typeof this.props.options['badge']['value'] == 'number') {
            this.badge_text = this.props.options['badge']['value'];
            return "badge "
        } else {
            return "badge " + this.cls();
        }
    }


}

module.exports = Base;
