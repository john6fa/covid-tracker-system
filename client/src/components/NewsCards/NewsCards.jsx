import React from 'react';
import NewsCard from '../NewsCard/NewsCard.jsx';
import { Grid, Grow, Typography } from '@material-ui/core';

const NewsCards = (props) => {
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
// author: "Beth Skwarecki"
// content: "The most important thing that the COVID vaccines do is prevent deaths and severe illness from COVID-19. The next most important thing they do is prevent many cases of milder illnessa job theyre not p… [+3306 chars]"
// description: "The most important thing that the COVID vaccines do is prevent deaths and severe illness from COVID-19. The next most important thing they do is prevent many cases of milder illness—a job they’re not perfect at, but it’s still far better to be vaccinated than…"
// publishedAt: "2021-09-14T20:30:00Z"
// source:
// id: null
// name: "Lifehacker.com"
// [[Prototype]]: Object
// title: "Do Vaccines Also Protect Against Long COVID?"
// url: "https://lifehacker.com/do-vaccines-also-protect-against-long-covid-1847675530"
// urlToImage: "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl

