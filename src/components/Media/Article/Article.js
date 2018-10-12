import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    maxHeight: 360,
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    // backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.PureComponent {
  // openLink = (url) => {
  //   window.open(url, '_blank')
  // }

  render() {
    const {
      classes,
      avatarImage,
      title,
      date,
      thumbnail,
      desc,
      url,
    } = this.props;

    return (
      <a
        href={url}
        target='_blank'
        style={{ textDecoration: 'none' }}
        rel='noreferrer noopener'
      >
        <Card
          className={classes.card}
          // onClick={() => {this.openLink(url); }}
        >
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar} src={avatarImage}/>
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title={title}
            subheader={date}
          />
          <CardMedia
            className={classes.media}
            image={thumbnail}
            title={thumbnail}
          />
          <CardContent style={{ display: 'none' }}>
            <Typography component="p">
              {desc}
            </Typography>
          </CardContent>
        </Card>
      </a>
    );
  }
}



export default withStyles(styles)(RecipeReviewCard);
