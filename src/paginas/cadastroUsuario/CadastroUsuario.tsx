import React, { ChangeEvent, useEffect, useState } from 'react';
import './CadastroUsuario.css';
import { Box, Typography, Button, Grid, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';

function CadastroUsuario() {

  const history = useNavigate()

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: ''
  })

  const [usuarioResult, setUsuarioResult] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    foto: '',
    senha: ''
  })

  const [confirmarSenha, setConfirmarSenha] = useState<String>("")

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value)
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [event.target.name]: event.target.value
    })
  }

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()
    if (confirmarSenha === usuario.senha) {
      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuarioResult)
        alert('Usuário cadastrado com sucesso')
      } catch (error) {
        alert('Por favor, verifique os campos')
      }
    } else {
      alert('As senhas não coincidem')
      setConfirmarSenha('')
      setUsuario({
        ...usuario,
        senha: ''
      })
    }
  }

  useEffect(() => {
    console.log('rodou')
  }, [usuario.nome])

  useEffect(() => {
    if (usuarioResult.id !== 0) {
      history('/login')
    }
  }, [usuarioResult])

  function back() {
    history('/login')
  }

  function CadastroUsuario() {
    return (
      <Grid container direction='row' justifyContent='center' alignItems='center'>
        <Grid item xs={6} className='img2'></Grid>
        <Grid item xs={6} alignItems='center'>
          <Box paddingX={10}>
            <form onSubmit={onSubmit}>
              <Typography variant='h3' align='center' gutterBottom fontWeight='bold' className='textos2'>Cadastrar</Typography>
              <TextField
                variant='outlined'
                name='nome'
                value={usuario.nome}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                label='Nome completo'
                margin='normal'
                fullWidth />
              <TextField
                variant='outlined'
                name='usuario'
                value={usuario.usuario}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                label='Usuário (endereço de e-mail)'
                margin='normal'
                fullWidth />
              <TextField
                variant='outlined'
                name='foto'
                value={usuario.foto}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                label='Foto (URL)'
                margin='normal'
                fullWidth />
              <TextField
                type='password'
                name='senha'
                value={usuario.senha}
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)}
                variant='outlined'
                label='Senha'
                margin='normal'
                fullWidth />
              <TextField
                type='password'
                name='confirmarSenha'
                value={confirmarSenha}
                onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)}
                variant='outlined'
                label='Confirmar Senha'
                margin='normal'
                fullWidth />
              <Box marginY={2}>
                <Button type='submit' size='large' variant='contained' className='btnCadastrar' fullWidth>Cadastrar</Button>
                <Link to='/login' className='text-decorator-none'>
                  <Button size='large' variant='contained' className='btnCancelar' fullWidth>Cancelar</Button>
                </Link>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid >
    )
  }
}

export default CadastroUsuario;