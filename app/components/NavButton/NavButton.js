import React, { Component, PropTypes } from 'react';

/*** Third Party Components ***/
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import Dialog from 'material-ui/lib/dialog';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';

import style from './style.scss';
import * as colors from '../../scss/colors';

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen = () => {
        this.setState({
            open: true
        });
    };

    handleClose = () => {
        this.setState({
            open: false
        });
    };

    render() {
        console.log(this.state.open)
        const actions = [
            <IconButton
                tooltip="close"
                onTouchTap={this.handleClose} >
                <FontIcon className="fa fa-close" />
            </IconButton>
        ];

        const modalBodyStyle = {
            display: 'flex',
            justifyContent: 'space-around',
        };


        const menuItemStyle = {
            root: {
                margin: '.2em 0'
            },

            innerDivStyle: {
                fontSize: '40px',
                padding: '0.1em'
            }
        };

        const iconStyle = {
            icon: {
                fontSize: '40px'
            }

        };


        return (
            <div >
                <div className={style.buttonWrapper}>
                    <IconButton
                        tooltip="navigation"
                        iconStyle={iconStyle.icon}
                        onTouchTap={this.handleOpen}>
                        <FontIcon
                            className="fa fa-bars" />
                    </IconButton>

                </div>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={modalBodyStyle}
                    contentClassName={style.modalContent} >

                    <div className={style.navWrapper}>
                        <MenuItem
                            innerDivStyle={menuItemStyle.innerDivStyle}
                            style={menuItemStyle.root}
                            primaryText="WHO WE ARE" />
                        <MenuItem
                            innerDivStyle={menuItemStyle.innerDivStyle}
                            style={menuItemStyle.root}
                            primaryText="WHAT WE DO" />
                        <MenuItem
                            innerDivStyle={menuItemStyle.innerDivStyle}
                            style={menuItemStyle.root}
                            primaryText="SERVICES" />
                        <MenuItem
                            innerDivStyle={menuItemStyle.innerDivStyle}
                            style={menuItemStyle.root}
                            primaryText="CONTACT" />

                    </div>

                </Dialog>
            </div>

        );
    }

}

export default NavButton;