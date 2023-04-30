import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import { useNavigate, useParams } from "react-router-dom";
import {Postagem} from "../../../models/Postagem";

import { useEffect, useState } from "react";
import { getAll, deleteId } from "../../../services/Service";
import { toast } from "react-toastify";
import { TokenState } from "../../../store/tokens/tokensReducer,";
import { useSelector } from "react-redux";

function DeletarPostagem() {
    const history = useNavigate();
    const {id} = useParams<{id:string}>();
    const token = useSelector<TokenState, TokenState["token"]>(
        (state) => state.token
    );
    const [postagem, setPostagens] = useState<Postagem>();

    useEffect(() => {
        if(token === ""){
            toast.error('Você não está logado!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            history("/login");
        }
    }, [token]);

    useEffect(() => {
        if(id !== undefined){
            findById(id);
        }
    }, [id]);

    async function findById(id: string){
        getAll(`/postagens/${id}`, setPostagens, {
            headers: {
                "Authorization" : token
            }
        })
    }

    function sim(){
        history('/postagens')
        deleteId(`/postagens/${id}`, {
            headers: {
                'Authorization' : token
            }
        });
        toast.success('Postagem deletada com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    } 
    

    function nao (){
        history('/postagens')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined" >
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar a postagem?
                            </Typography>
                            <Typography color="textSecondary" >
                                {postagem?.titulo}
                            </Typography>
                        </Box>

                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button 
                                onClick={sim}
                                variant="contained" 
                                className="marginLeft" 
                                size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>

                            <Box>
                                <Button
                                onClick={nao} 
                                variant="contained" 
                                size='large' 
                                color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarPostagem;