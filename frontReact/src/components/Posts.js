import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import InputBase from '@mui/material/InputBase';
import { Container } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import PostCard from './PostCard';
import ButtonAppBar from './ButtonAppBar';
import jwtDecode from 'jwt-decode';
import SearchIcon from '@mui/icons-material/Search';
const Posts = () => {
    const [datas, setDatas] = useState([]);
    const [searchKey, setSearchKey] = useState();

    const [authTokens, setAuthTokens] = useState(localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null)

    const userInfo = localStorage.getItem('tokens') ? jwtDecode(localStorage.getItem('tokens')) : null

    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api`)
        .then(res => res.json())
        .then(data => { setDatas(data);})
    }, [])


    const searchText = () => {
      fetch(`http://127.0.0.1:8000/api/search/?search=${searchKey}`)
      .then(response => response.json()).then(data => setDatas(data))
    }

  let updateToken = async ()=> {

    let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({'refresh':authTokens?.refresh})
    })

    let data = await response.json()
    
    if (response.status === 200){
        setAuthTokens(data)
        localStorage.setItem('tokens', JSON.stringify(data))
    }else{
      setAuthTokens("")
      localStorage.removeItem('tokens')
    }
}


  return (
    <Container >
      <ButtonAppBar userInfo={userInfo} />
      <div style={{ textDecoration: 'none', backgroundColor:'white'}} >
      <InputBase
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Products"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" sx={{ p: '15px' }} aria-label="search" onClick={() => {searchText()}}>
        <SearchIcon />
      </IconButton>
      </div>
        <Grid container item spacing={3}>
            {datas?.map((post)=>(
            <Grid container item xs={12} md={6} lg={3} key={post.id}>
                <PostCard post={post} />
            </Grid>
        ))}
        </Grid>
    </Container>
  )
}

export default Posts