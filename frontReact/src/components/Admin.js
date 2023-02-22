import React,{useState, useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Admin() {

const [rows, setRows] = useState([]);
const [error, setError] = useState('');

const token = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null

useEffect(() => {
    fetch('http://127.0.0.1:8000/api')
        .then(res => res.json())
        .then(data => {console.log(data);setRows(data);})
    }, [error])


  const deletePost = (id) => {
    fetch('http://127.0.0.1:8000/api/admin/delete/'+ id, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer '+token?.access,
            'Content-Type': 'application/json',
		        accept: 'application/json',
        },
      }).then((response) => response.json()).then(data => {setError(data?.detail);})
  }

  


  return (
    <>
    <TableContainer component={Paper}>
        <Typography border={4} borderColor='gray' variant="h5" color="inherit" paragraph>
        Admin Dashboard
        </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Weight&nbsp;(g)</TableCell>
            <TableCell align="left">Content&nbsp;(g)</TableCell>             
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">${row.price}</TableCell>
              <TableCell align="left">{row.brand}</TableCell>
              <TableCell align="left">{row.weight}</TableCell>
              <TableCell align="left">{row.content.substring(0,100)}...</TableCell>
              <TableCell align="left"><EditIcon/></TableCell>
              <TableCell align="left"><IconButton  onClick={() => deletePost(row.id)}>
                    <DeleteOutlinedIcon />
                  </IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Typography bgcolor={'gray'} >{error}</Typography>
      </Table>
    </TableContainer>
    <div style={{ display:'flex', justifyContent:'space-between', alignItems:'start' }} >
    <Link style={{  textDecoration: 'none', backgroundColor:'gray', padding:'5px' }} color='textPrimary' variant="subtitle1" href="/">
    Go Back
  </Link>
  <Link style={{  textDecoration: 'none',  padding:'6px',marginLeft:'6px' }} color='textPrimary' variant="subtitle1" href="/create">
    <AddCircleOutlineIcon style={{  marginTop:'12px' }}/>Add New Product
  </Link>
  </div>
  </>
  );
}