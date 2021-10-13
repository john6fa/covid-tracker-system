import React from 'react';
import NewsCard from '../NewsCard/NewsCard.jsx';
import { Grid, Grow, Typography } from '@material-ui/core';

import useStyles from './styles.js';

const NewsCards = (props) => {
  const classes = useStyles();
  const { articles } = props;

  const newsArticle = [];
  articles.forEach((article, index) => {
    newsArticle.push(
      <Grid key={index} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
        <NewsCard key={index} article={article} />
      </Grid>)
  })

  return (
    <div>
      <h1 style={{ textTransform: "capitalize", fontSize: "45px", marginLeft: "55px", marginBottom: "60px" }}>Trending Covid-19 News Articles</h1>
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {newsArticle}
        </Grid>
      </Grow>
    </div>
  )
}

export default NewsCards;

// <Grow in>
//   <Grid container alignItems="stretch" spacing={3}>
//     {articles.map((article, i) => {
//       <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
//         <NewsCard article={article} i={i} />
//       </Grid>
//     })}
//   </Grid>
// </Grow>

// {
//   articles.map((article, i) => {
//     <NewsCard i={i} />
//   })
// }


