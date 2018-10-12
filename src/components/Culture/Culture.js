import React from 'react';
import Typography from '@material-ui/core/Typography';

import Photos from './Photos/Photos';


const Culture = (props) => {
  const products = [
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Fusa.JPG?alt=media&token=17983d78-26e4-48b5-8f06-73a42343a487',
      title: 'USA, North America, Software Engineer'
    },
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Fmalta.JPG?alt=media&token=6886dec8-161e-4575-b5a2-f1544ebe432a',
      title: 'Malta, Europe, Language school',
    },
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Flatin.JPG?alt=media&token=fe8bd6a8-05e3-4465-8b14-df9d8368ffcb',
      title: 'Columbia, South America, 1 month stay',
    },
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Ftokyo.JPG?alt=media&token=77f05724-00e5-4287-aefe-4649083c18e3',
      title: 'Japan, Asia, Home',
    },
  ];

  return (
      <div style={props.style}>
      <Typography variant="h3" gutterBottom style={{ marginBottom: 64 }}>
        Culture
      </Typography>
      <Photos items={products} />
    </div>
  )
}

export default Culture;
