import React,{useEffect, useState} from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { FormControl, TextField } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom'

const Create = ({updateToken }) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [brand, setBrand] = useState('')
    const [price, setPrice] = useState('')
    const [weight, setWeight] = useState('')
    const [slug, setSlug] = useState('')

    const [error, setError] = useState('');

    const navigate = useNavigate()

    const token = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch('http://127.0.0.1:8000/api/admin/create/', {
          method: 'POST',
          body: JSON.stringify({
            author:"1",
            title:title,
            brand: brand,
            price:price,
            weight:weight,
            content: content,
            slug:slug   
          }),
          headers: {
              Authorization: 'Bearer '+token?.access,
              'Content-Type': 'application/json',
              accept: 'application/json',
          },
        }).then((response) => response.json()).then(data => {setError(data?.detail);navigate('/')})
    }

    const TrToEn = (text) => {
      return text.replaceAll('Ğ','g')
          .replaceAll('Ü','u')
          .replaceAll('Ş','s')
          .replaceAll('I','i')
          .replaceAll('İ','i')
          .replaceAll('Ö','o')
          .replaceAll('Ç','c')
          .replaceAll('ğ','g')
          .replaceAll('ü','u')
          .replaceAll('ş','s')
          .replaceAll('ı','i')
          .replaceAll('ö','o')
          .replaceAll('ç','c');
  };

    useEffect(()=>{
      setTitle(TrToEn(title));
      setSlug(title.toLowerCase().replaceAll(' ', '-').replaceAll(',','').replaceAll('.',''));
      console.log("slug",slug)
    },[title]);

  return (
    <>
    <Link position='fixed' style={{  textDecoration: 'none', backgroundColor:'gray', padding:'5px' }} color='textPrimary' variant="subtitle1" href="/">
    Go Back
  </Link>
    
    <Container style={{ backgroundColor:'inherit' }}  sx={{marginTop:1,marginBottom:2, border:2, borderColor:"gray",borderWidth:4 }} >
        <Typography 
        variant="h6" 
        color="black"
        component="h2"
        gutterBottom>
            Create Post
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                value={title}
                fullWidth
                onChange={(e) => setTitle(e.target.value)} 
                label="Title" 
                variant="outlined" 
                color="primary" 
                style = {{marginBottom:4, marginTop:2}}
            />
            <TextField 
                value={content}
                fullWidth
                onChange={(e) => setContent(e.target.value)} 
                label="Content" 
                variant="outlined" 
                color="primary"
                multiline
                rows={4}
                style = {{marginBottom:4, marginTop:2 }}
            />
            <TextField 
                value={brand}
                fullWidth
                onChange={(e) => setBrand(e.target.value)} 
                label="Brand" 
                variant="outlined" 
                color="primary"
                multiline
                rows={4}
                style = {{marginBottom:4, marginTop:2 }}
            />
            <TextField 
                value={price}
                fullWidth
                onChange={(e) => setPrice(e.target.value)} 
                label="Price" 
                variant="outlined" 
                color="primary"
                multiline
                rows={4}
                style = {{marginBottom:4, marginTop:2 }}
            />
            <TextField 
                value={weight}
                fullWidth
                onChange={(e) => setWeight(e.target.value)} 
                label="Weight" 
                variant="outlined" 
                color="primary"
                multiline
                rows={4}
                style = {{marginBottom:4, marginTop:2 }}
            />
            <TextField 
                value={title.toLowerCase().replaceAll(' ', '-')}
                fullWidth
                onChange={(e) => setSlug(e.target.value)} 
                label="Slug" 
                variant="outlined" 
                color="primary"
                multiline
                rows={4}
                style = {{marginBottom:4, marginTop:2 }}
            />
            <Button type="submit" 
                color="grey" 
                variant="contained"
                sx={{ width: 100, border: 2 }}
                endIcon={<KeyboardArrowRightIcon />}>
                Submit
            </Button>
        </form>
        <Typography bgcolor={'gray'} >{error}</Typography>
        
    </Container>
    </>
  )
}


export default Create