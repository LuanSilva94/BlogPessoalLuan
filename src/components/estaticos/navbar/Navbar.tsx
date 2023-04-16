import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <AppBar position="static" style={{background: 'var(--blue-600)'}}>
        <Toolbar variant="dense" >
          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} >
            <Box style={{ cursor: 'pointer' }}>
              <Typography variant="h5" color="inherit">
                BlogPessoal
              </Typography>
            </Box>

            <Box display="flex" justifyContent="start">
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
              <Box mx={1} style={{ cursor: 'pointer' }}>
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
              <Box mx={1}>
                <Link to='/login'>
                  <Typography variant="h6" color="inherit">
                    logout
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;