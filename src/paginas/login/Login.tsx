import React, { ChangeEvent, useEffect, useState } from 'react'
import './Login.css'
import { Box, Typography, Button, Grid, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import  UserLogin  from '../../models/UserLogin'
import { login } from '../../services/Service'
import useLocalStorage from 'react-use-localstorage'

function Login() {

  const history = useNavigate()

  const [token, setToken] = useLocalStorage('token')

  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    token: ''
  })

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await login('/usuarios/logar', userLogin, setToken)
      alert('Usuario logado com sucesso')

    } catch (error) {
      console.log(error);
      alert('Usuário ou senha inválidos')
    }
  }

  useEffect(() => {
    if (token !== '') {
      history('/home')
    }
  }, [token])

  return (
    <>
      <Grid container alignItems={'center'}>
        <Grid item xs={6} justifyContent='center' >
          <Box display='flex' justifyContent={'center'} >
            <Grid item xs={6} >
              <form onSubmit={onSubmit}>
                <Typography variant='h3' align='center' gutterBottom fontWeight='bold'>Entrar</Typography>
                <TextField value={userLogin.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  name='usuario'
                  id='usuario'
                  variant='outlined'
                  label='Usuário'
                  margin='normal'
                  fullWidth />

                <TextField value={userLogin.senha}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                  id='senha'
                  name='senha'
                  type='password'
                  variant='outlined'
                  label='Senha'
                  margin='normal'
                  fullWidth />

                <Box marginY={2}>

                  <Button type='submit' size='large' variant='contained' className='botaolegal' fullWidth>
                    Logar
                  </Button>

                </Box>
              </form>
              <hr />
              <Typography marginTop={2} align='center' variant="body1">Ainda não tem uma conta? <Link to='/cadastroUsuario' className='linkLogin'>Cadastre-se aqui</Link></Typography>
            </Grid>
          </Box>
        </Grid>
        <Grid xs={6} className='imagemLogin'></Grid>
      </Grid>
    </>
  )
}

export default Login