import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SocialIcons from './SocialIcons/SocialIcons';

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: '#fff',
  },
  grow: {
    flexGrow: 1,
    textAlign: 'flex-start'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    anchorEl: null,
    title: '',
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  openLink = (url) => {
    window.open(url, '_blank')
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const barStyle = {
      backgroundColor: '#fff',
      color: '#282c34',
    };

    const icons = [
      {
        name: 'fab fa-facebook-square',
        color: '#3b5998',
        link: 'https://www.facebook.com/kazuya.fujimori.5',
      },
      {
        name: 'fab fa-linkedin',
        color: '#0077B5',
        link: 'https://www.linkedin.com/in/kazuya-fujimori-1a689a15a/',
      },
      {
        name: 'fab fa-github-square',
        color: '#1B1F23',
        link: 'https://github.com/kzya32',
      }
    ];

    return (
      <div className={classes.root}>
        <AppBar position="static" style={barStyle} >
          <Toolbar>
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
              >

                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Close</MenuItem>
              </Menu>
              </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              {this.state.title}
            </Typography>
            <SocialIcons icons={icons} />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
