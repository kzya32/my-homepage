import React from 'react';
import Typography from '@material-ui/core/Typography';

import Articles from './Articles/Articles';


const Media = (props) => {
  const articles = [
    {
      avatarImage: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Fthebridgeicon.png?alt=media&token=b44cb6db-bb3a-452a-8d25-58d47af46aaf',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/myhomepage-93213.appspot.com/o/images%2Fsxsw-2018-transparent1.jpg?alt=media&token=2dc17094-bd2d-4562-bbcb-38e3d5d1b07c',
      url: 'http://thebridge.jp/2018/03/sxsw-2018-interactive-trade-show-day1-snapshots',
      title: 'SXSW 2018 Interactive現地レポート',
      date: 'March 13, 2018',
      desc: 'SXSW Interactive がテキサス州オースティンで始まった。この街に来るのは、もはや帰って来た感さえある（そして、イベント半ばでこの街を後にするときには、後ろ髪を引かれる思いを禁じ得ない）。バンコクで別の仕事があったので、現地入りできたのは SXSW Interactive の2つ目だったのだが、これまでに見聞きできた内容の一部をまとめてみた...',
    }
  ];

  return (
      <div style={props.style}>
      <Typography variant="h3" gutterBottom style={{ marginBottom: 64 }}>
        Media
      </Typography>
      <Articles items={articles} />
    </div>
  )
}

// {articles.map((article) => {
//   return (
//     <Article
//       avatarImage={article.avatarImage}
//       title={article.title}
//       date={article.date}
//       thumbnail={article.thumbnail}
//       desc={article.desc}
//       url={article.url}
//       key={article.url}
//     />
//   )
// })}

export default Media;
