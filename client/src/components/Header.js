import React, { Component } from 'react';
import FixedMenu from './FixedMenu';

export default class Header extends Component {
    render() {
        //console.log(this.props.location.pathname);

        return(
            <div>
                <FixedMenu />
            </div>
        )
    }
}