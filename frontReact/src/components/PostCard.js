import React from 'react'
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardHeader, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
const PostCard = ({post }) => {
  return (
    <div>
      <Link style={{ textDecoration: 'none' }} color='textPrimary' href={'post/' + post.slug}>
          <Card sx= {{border:2, borderColor:"black",borderWidth:1, width:250, height:400, marginY:4, textAlign:"center"}} elevation={1}>
              <CardHeader 
              title={post.title?.substring(0,20)}
              subheader={post.category}
              />
              <CardMedia
                component="img"
                height="120"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MQ-1_Predator_unmanned_aircraft.jpg/1200px-MQ-1_Predator_unmanned_aircraft.jpg"
                alt="Paella dish"
              />
              <CardContent>
                  <Typography variant="body2" color="textSecondary" style={{ maxWidth: '100%', overflow: 'hidden', wordBreak: 'break-all' }}>
                      { post.content?.substring(0,198)}...
                  </Typography>
              </CardContent>
          </Card>
        </Link>
    </div>
  )
}

export default PostCard