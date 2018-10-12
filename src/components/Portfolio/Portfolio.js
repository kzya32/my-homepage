import React from 'react';
import Typography from '@material-ui/core/Typography';

import Products from './Products/Products';

const Portfolio = (props) => {
  const products = [
    {
      thumbnail: 'https://res.cloudinary.com/dvztbxjyp/image/upload/v1528769428/ogp.png',
      url: 'https://trnspt.com/',
      title: 'Transparent, Web app',
      year: '2018',
      desc: 'Transparent is a visualization technology that promotes smooth conversation, using the latest ASR (Automatic Speech Recognition) and NLP (Natural Language Processing) technologies.',
      buttons: [
        { title: 'Web', url: 'https://trnspt.com/' },
      ]
    },
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Fheader-color400.png?alt=media&token=c6db1322-9121-409e-86cd-7052fb8fa5b9',
      url: 'https://itunes.apple.com/jp/app/flego/id1403688594?l=en&mt=8',
      title: 'FLEGO, iOS/Android app',
      year: '2018',
      desc: '',
      buttons: [
        { title: 'ios', url: 'https://itunes.apple.com/jp/app/flego/id1403688594?l=en&mt=8' },
        { title: 'Android', url: 'https://play.google.com/store/apps/details?id=com.flego.android' },
      ]
    },
    {
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2FSoccerHacker.png?alt=media&token=0e1c512e-0442-4e06-9947-8cb9d4e06d7d',
      url: 'http://sakaijun.blog.jp/archives/33461972.html',
      title: 'Soccer Hacker, iOS/Android app',
      year: '2018',
      desc: '',
      buttons: [
        { title: 'ios', url: 'https://itunes.apple.com/us/app/soccer-hacker/id1427941988?mt=8' },
        { title: 'Android', url: 'https://play.google.com/store/apps/details?id=com.lifting.android' },
      ]
    },
  ];

  return (
      <div style={props.style}>
      <Typography variant="h3" gutterBottom style={{ marginBottom: 64 }}>
        Portfolio
      </Typography>
      <Products items={products} />
    </div>
  )
}

export default Portfolio;
