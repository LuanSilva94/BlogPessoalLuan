import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://blogpessoalluan.onrender.com'
})

export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data.token)
  }
  
  export const cadastrarUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
  }