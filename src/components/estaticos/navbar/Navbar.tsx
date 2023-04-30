import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer,';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["token"]>(
      (state) => state.token
  );
  const history = useNavigate();
  const dispatch = useDispatch();

  function goLogout() {
      dispatch(addToken(''));
      toast.info('Usuário deslogado!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      history('/login')
  }

  let navbarComponent;

  if(token != ""){
      navbarComponent=  <AppBar className="navbar" position="static" >
      <Toolbar variant="dense">
          <Box className="cursor" display={'flex'} justifyContent={'space-between'} width={'100%'}>
              <Typography variant="h5" color="inherit">
                  Blog Pessoal
              </Typography>
          </Box>
          <Box display="flex" justifyContent="start">

              <Link to="/home" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Home
                      </Typography>
                  </Box>
              </Link>

              <Link to="/postagens" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Postagens
                      </Typography>
                  </Box>
              </Link>

              <Link to="/temas" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          Temas
                      </Typography>
                  </Box>
              </Link>

              <Link to="/formularioTema" className="text-decorator-none">
                  <Box mx={1} className="cursor">
                      <Typography variant="h6" color="inherit">
                          CadastrarTema
                      </Typography>
                  </Box>
              </Link>

              <Box mx={1} className='cursor' onClick={goLogout}>
                  <Typography variant="h6" color="inherit">
                      Sair
                  </Typography>
              </Box>


          </Box>

      </Toolbar>
  </AppBar>
  }
  return (
      <>
      {navbarComponent}
      </>
  )
}

export default Navbar