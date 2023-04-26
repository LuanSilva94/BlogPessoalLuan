import React from 'react';
import Duke from './../../assets/Duke.png'  
import { Box, Typography, Grid, Button } from '@mui/material';
import './Home.css'

function Home() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: 'var(--blue-java)' }}
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}  >
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="p"
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              style={{ color: 'white', fontWeight: 'bold' }}
            >
              Compartilhe e aprenda sobre Java!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}></Box>
            <Button
              variant="outlined"
              style={{
                borderColor: 'white',
                backgroundColor: 'var(--blue-java)',
                color: 'white',
              }}
            >
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src={Duke}
            alt="Image do Duke auxiliar do Java acenando com as mão e tomando café"
            className='fotoHome'
          />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: 'white' }}></Grid>
      </Grid>
    </>
  );
}

export default Home;