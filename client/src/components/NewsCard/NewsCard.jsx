import React from 'react'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {

  return (
    <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={urlToImage || "https://images.unsplash.com/photo-1544991875-5dc1b05f607d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small">Learn More</Button>
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