import React, { Component, PropTypes } from 'react';

/*** Third Party Components ***/
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
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
                <FontIcon
                    color={colors.textWhite}
                    className="fa fa-times-circle-o" />
            </IconButton>
        ];

        const modalBodyStyle = {
            display: 'flex',
            justifyContent: 'space-around',
        };



        const iconStyle = {
            icon: {
                fontSize: '40px'
            }

        };



        return (
            <div >
                <IconButton
                    tooltip="navigation"
                    iconStyle={iconStyle.icon}
                    onTouchTap={this.handleOpen}>
                    <FontIcon
                        color={this.state.open ? colors.textWhite : colors.reallyDarkBlue}
                        className={`fa fa-${this.state.open ? 'times-circle-o' : 'bars'}`} />
                </IconButton>
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                    bodyStyle={modalBodyStyle}
                    contentClassName={style.modalContent} >

                    <div className={style.navWrapper}>
                        <FlatButton
                            label="WHO WE ARE"
                            linkButton={true}
                            className={style.link}
                            href="http://www.careersmarts.ca/team.php" />
                        <FlatButton
                            label="WHAT WE DO"
                            linkButton={true}
                            className={style.link}
                            href="http://www.careersmarts.ca/whatwedo.php" />
                        <FlatButton
                            label="SERVICES"
                            linkButton={true}
                            className={style.link}
                            href="http://www.careersmarts.ca/career_services.php" />
                        <FlatButton
                            label="CONTACT"
                            linkButton={true}
                            className={style.link}
                            href="http://www.careersmarts.ca/contact.php" />

                    </div>

                </Dialog>
            </div>

        );
    }

}

export default NavButton;