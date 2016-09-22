import React from 'react';
import Dropdown from './app/components/icon/icon.js';

export class Common extends React.Component {
    render() {
        var a = {
            icon: {
                name: 'accessible',
                style: {

                }
            },
            badge: { 
            	value: 10,
            	 style: {} 
            	}
        };
        return ( <Dropdown options = { a }/>

        );
    }
}

export default Common;
