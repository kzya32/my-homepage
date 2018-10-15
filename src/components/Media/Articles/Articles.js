import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // maxHeight: 600,
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});

function SingleLineGridList(props) {
  const { classes } = props;

  const cols = window.innerWidth > 800 ? 2 : 1.5;
  const imageStyle = window.innerWidth > 800 ? null : { objectFit: 'cover', height: 180 };

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={cols} >
        {props.items.map(product => (
            <GridListTile key={product.url} >
              <img src={product.thumbnail} alt={product.title} style={imageStyle} />
              <GridListTileBar
                title={product.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                 <IconButton>
                   <OpenInNewIcon
                    className={classes.title}
                    onClick={() => { window.open(product.url, '_blank'); }}
                  />
                 </IconButton>
               }
              />
            </GridListTile>

        ))}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);
