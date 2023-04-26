import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';



function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" className='tabPostagem' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre o projeto" value="2" />
                        <Tab label="Desenvolvedor" value="3" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel value="2">
                    <Typography 
                    variant="h5" 
                    gutterBottom 
                    color="textPrimary" 
                    component="h5" 
                    align="center" 
                    className="titulo"
                    >
                        Sobre-nós
                    </Typography>

                    <Typography 
                    variant="body1" 
                    gutterBottom 
                    color="textPrimary" 
                    align="justify"
                    >   
                        <h3> Titulo </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, odit labore facilis quod natus veritatis voluptates dolor fugiat sunt. Praesentium mollitia cum explicabo magnam numquam repudiandae atque rem, voluptatibus autem!
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem praesentium sed repellat neque esse quos rem sequi itaque laudantium, quisquam numquam, quae dolor! Aperiam, perferendis odit. Fugiat veritatis voluptates quam.
                        </p>

                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates id illo voluptate, ducimus delectus quod libero atque laboriosam doloribus rem commodi ipsum quidem facere similique placeat recusandae, labore velit aspernatur?
                        </p>
                    
                    
                    </Typography>
                </TabPanel>

                <TabPanel value="3" >
                    <Box display="flex"  justifyContent="space-around" >
                        <Box>
                        <h1>Luan Souza Silva</h1>
                        <p> 
                            Desenvolvedor Java Full Stack, estudante de Java e do framework
                            Spring Boot junto das tecnologias MySQL, Docker, HTML, CSS,
                            JavaScript TypeScript e React. Ingressei recentemente no mundo da 
                            programação, e venho mergulhando nesse mundo que é o backend.
                            Estou motivado, a trazer um pouco desse universo até vocês, e espero
                            aprender muito com vocês também! 
                        </p>
                        </Box>
                        <Box>
                        <img src="https://github.com/LuanSilva94.png" alt="Foto do perfil" />
                        </Box>                     
                        
                    </Box>
                </TabPanel>
                
            </TabContext>
        </>
    );
}
export default TabPostagem;