import React, { useState, useEffect, ChangeEvent } from 'react';
import {
  Button,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import './CadastroPostagem.css';

import  {Postagem}  from '../../../models/Postagem';
import { useNavigate, useParams } from 'react-router-dom';
import  {Tema}  from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { getAll, getId, put, post } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer,';
import {Usuario}  from '../../../models/Usuario';

function CadastroPostagem() {
  const history = useNavigate();
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )
  const userId = useSelector<TokenState, TokenState["id"]>(
    (state) => state.id
  )
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);

  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
    usuario: null
  });

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    foto: '',
    nome: '',
    usuario: '',
    senha: ''
  })

  useEffect(() => {
    if (token === '') {
      alert('sem token não rola');
      history('/login');
    }
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [event.target.name]: event.target.value,
      tema: tema,
    });
  }

  async function getAllTemas() {
    await getAll('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await getId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getAllTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario
    });
  }, [tema]);

  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (id !== undefined) {
      try {
        await put('/postagens', postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Postagem atualizada com sucesso');
        history('/postagens')
      } catch (error) {
        alert('Falha ao atualizar a postagem');
      }
    } else {
      try {
        await post('/postagens', postagem, setPostagem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Postagem cadastrada com sucesso');
        history('/postagens')
      } catch (error) {
        alert('Falha ao cadastrar a postagem');
      }
    }
  }

  return (
    <>
      <Container maxWidth={'sm'}>
        <form className="cadastroPost" onSubmit={onSubmit}>
          <Typography marginTop={4} variant="h3" align="center">
            Cadastrar postagem
          </Typography>
          <TextField
            value={postagem.titulo}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Titulo da postagem"
            name="titulo"
            id="titulo"
            variant="outlined"
            fullWidth
          />
          <TextField
            value={postagem.texto}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updateModel(event)
            }
            label="Texto da postagem"
            name="texto"
            id="texto"
            variant="outlined"
            fullWidth
            multiline
            minRows={4}
          />

          <FormControl>
            <InputLabel>Tema</InputLabel>
            <Select
              variant="standard"
              onChange={(event) =>
                getId(`/temas/${event.target.value}`, setTema, {
                  headers: { Authorization: token },
                })
              }
            >
              {temas.map((tema) => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
              ))}
            </Select>
            <FormHelperText>Escolha um tema para a sua postagem</FormHelperText>
          </FormControl>
          <Button variant="contained" color="primary" type='submit' disabled={tema.id === 0}>
            {tema.id === 0 ? 'selecione um tema' : 'cadastrar'}
          </Button>
        </form>
      </Container>
    </>
  );
}

export default CadastroPostagem;
