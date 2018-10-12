import React from 'react';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    margin: theme.spacing.unit * 2,
    // margin: 32,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      // color: red[800],
    },
  },
});

class SocialIcon extends React.PureComponent {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  openLink = (url) => {
    window.open(url, '_blank')
  }

  render() {
    const { classes, name, color, link, iconStyle } = this.props;

    return (
        <IconButton
          className={classes.menuButton}
          onClick={() => this.openLink(link)}
        >
          <Icon
            className={classNames(styles.icon, name)}
            style={{...iconStyle, color}}
          />
        </IconButton>
    )
  }
}

export default withStyles(styles)(SocialIcon);
