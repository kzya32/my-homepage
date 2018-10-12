import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
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

class Product extends React.PureComponent {
  openLink = (url) => {
    window.open(url, '_blank')
  }

  render() {
    const {
      classes,
      thumbnail,
      title,
      desc,
      buttons,
      url,
    } = this.props;

    const tileStyle = { maxHeight: 400, maxWidth: 600 }

    return (
      <GridListTile style={tileStyle}>
        <img src={thumbnail} alt={title} />
        <GridListTileBar
          title={title}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
        />
      </GridListTile>
    );
  }
}

// <Card className={classes.card}>
//   <CardActionArea onClick={() => { this.openLink(url); }} >
//     <CardMedia
//       component="img"
//       alt="Contemplative Reptile"
//       className={classes.media}
//       height="140"
//       image={thumbnail}
//       title={title}
//     />
//     <CardContent>
//       <Typography gutterBottom variant="h5" component="h2">
//         {title}
//       </Typography>
//       <Typography component="p" style={descStyle} >
//         {desc}
//       </Typography>
//     </CardContent>
//   </CardActionArea>
//   <CardActions>
//     {buttons.map((button) => {
//       return (
//         <Button
//           size="small"
//           color="primary"
//           onClick={() => { this.openLink(button.url); }}
//           key={button.title}
//         >
//           {button.title}
//         </Button>
//       )
//     })}
//   </CardActions>
// </Card>

Product.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);
