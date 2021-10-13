import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from './styles.js';
// import { FacebookShareButton, TwitterShareButton } from "react-share";
// import { FacebookIcon, TwitterIcon } from "react-share";


const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 450 }} href={url} target="_blank" className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={urlToImage || "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
          alt="image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.title}>
            {title}
          </Typography>

          <div className={classes.details}>
            <Typography variant="body2">
              {(new Date(publishedAt)).toDateString()}
            </Typography>
            <Typography variant="body2">
              {source.name}
            </Typography>
          </div>

          <Typography variant="body2" >
            {description}
          </Typography>
        </CardContent>

      </CardActionArea>

      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary">Share</Button> */}
        <Button size="small" href={url} target="_blank">Learn More</Button>
      </CardActions>



    </Card>
  )
}

export default NewsCard;




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