import React from 'react';
import GitHubInIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import'./Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer,';

function Footer() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
);

let  footerComponent;
if(token != ""){
    footerComponent = <Grid container
    direction="row" 
    justifyContent="center" 
    alignItems="center">
        <Box display={'flex'} alignItems="center" className='box1'>
            <Box >
                <Box paddingTop={1}
                display="flex" 
                alignItems="center" 
                justifyContent="center"
                >
                    <Typography 
                    variant="h5" 
                    align="center" 
                    gutterBottom 
                    className='textos'
                    >
                        Acompanhe minhas redes 
                        </Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a
                    href="https://github.com/LuanSilva94" 
                    target="_blank">
                        <GitHubInIcon className='redes'/>
                    </a>
                    
                    <a 
                    href="https://www.linkedin.com/in/luan-silva-6506a61a1/" 
                    target="_blank">
                        <LinkedInIcon className='redes'/>
                    </a>
                </Box>
            </Box>
            <Box className='box2'>
                <Box paddingTop={1}>
                    <Typography 
                    variant="subtitle2" 
                    align="center" 
                    gutterBottom className='textos'
                    >
                        © 2020 Copyright:
                    </Typography>
                </Box>

                <Box >
                    <a 
                    href="https://brasil.generation.org"
                    target="_blank"
                    className='text-decorator-none'                                                        
                    >
                        <Typography 
                        variant="subtitle2" 
                        gutterBottom 
                        className='textos' 
                        align="center"
                        >
                            brasil.generation.org
                        </Typography>
                    </a>
                </Box>
            </Box>
        </Box>
    </Grid>

    
}
return(
<>
    { footerComponent}
</>
)
}

export default Footer;