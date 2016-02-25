import React, { Component, PropTypes } from 'react';

/*** Third Party Components ***/
import Dialog from 'react-toolbox/lib/dialog';
import { Button, IconButton } from 'react-toolbox/lib/button';
import Icon from 'react-fa';

import style from './style.scss';

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
      return (
        <div >
          <IconButton
            className={style.navBars}
            neutral={false}
            onClick={this.handleOpen}>
            <Icon
              name={this.state.open ? 'times-circle-o' : 'bars'} />
          </IconButton>
          <Dialog
            active={this.state.open}
            onOverlayClick={this.handleClose}
            className={style.dialog} >


                <Button
                  flat
                  label="WHO WE ARE"
                  target="_blank"
                  neutral={false}
                  className={style.link}
                  href="http://www.careersmarts.ca/team.php" />
                <Button
                  flat
                  label="WHAT WE DO"
                  target="_blank"
                  neutral={false}
                  className={style.link}
                  href="http://www.careersmarts.ca/whatwedo.php" />
                <Button
                  flat
                  label="SERVICES"
                  target="_blank"
                  neutral={false}
                  className={style.link}
                  href="http://www.careersmarts.ca/career_services.php" />
                <Button
                  flat
                  label="CONTACT"
                  target="_blank"
                  neutral={false}
                  className={style.link}
                  href="http://www.careersmarts.ca/contact.php" />

          </Dialog>
        </div>

      );
    }

}

export default NavButton;