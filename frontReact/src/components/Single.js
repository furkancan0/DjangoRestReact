import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const Single = () => {
    const { slug } = useParams();

    const [slugData, setSlugData] = useState({});


    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/post/${slug}`)
        .then(res => res.json())
        .then(data => setSlugData(data))
    },[])



  return (
    <div >
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#dbdbdb',
        mb: 2,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/MQ-1_Predator_unmanned_aircraft.jpg/1200px-MQ-1_Predator_unmanned_aircraft.jpg")`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {slugData.category}
            </Typography>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {slugData.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {slugData.brand}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph style={{ maxWidth: '100%', overflow: 'hidden', wordBreak: 'break-all' }}>
              {slugData.content}
            </Typography>
            <div style={{ height:'200px' }}>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <Link style={{position:"relative", textDecoration: 'none', backgroundColor:'gray', padding:'10px'}} color='textPrimary' variant="subtitle1" href="/">
      Go Back
    </Link>
    <Grid style={{ display:'flex', justifyContent:'space-evenly', alignItems:'start' }}>
        <Typography border={4} borderColor='gray' variant="h5" color="inherit" paragraph>
        Brand:{slugData.brand}
        </Typography>
        <Typography border={4} borderColor='gray' variant="h5" color="inherit" paragraph>
        Fiyat:{slugData.price}$
        </Typography>
        <Typography border={4} borderColor='gray' variant="h5" color="inherit" paragraph>
        Weight:{slugData.weight}
        </Typography>
    </Grid>
    </div>
  )
}

export default Single