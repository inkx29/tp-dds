import React, { useState } from 'react';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Marcas from './Marcas.jsx';
import Pantallas from './Pantallas.jsx';
import RegistroP from './RegistroPantalla.jsx';
import RegistroM from './RegistroMarca.jsx';

export default function Inicio() {

    const [action, setAction] = useState('I')
    const [item, setItem] = useState({})

    const onMarcas = () =>{
        setAction('M')
        setItem({})
    }
    
    const onPantallas = () => {
        setAction('P'); // Puedes manejarlo en el futuro para notebooks
        setItem({})
    };

    const onVolver = () => {
        setAction('I')
    }

    const onRegistrarP = () => {
        setAction('NP')
    }

    const onActualizarP = async(item)=>{
        setItem(item)
        setAction('NP')
    }

    const onRegistrarM = () =>{
        setAction('NM')
    }

    const onActualizarM = async(item)=>{
        setItem(item)
        setAction('NM')
    }

    return (
        <>
            {     
                action === 'I' && (
                    <>
                        <Navbar bg="light" variant="light">
                            <Container>
                                <Nav className="me-auto">
                                <Nav.Link onClick={onMarcas} style={{ cursor: 'pointer' }}>Marcas Disponibles</Nav.Link>
                                <Nav.Link onClick={onPantallas} style={{ cursor: 'pointer' }}>Pantallas</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                        <Container className="mt-4">
                            <div className="p-5 rounded" style={{ backgroundColor: "lightgray" }}>
                                <h1>Computación SRL</h1>
                                <p>Este ejemplo está desarrollado con las siguientes tecnologías:</p>
                                <p>
                                    Backend: NodeJs, Express, WebApiRest, Swagger, Sequelize, Sqlite
                                    múltiples capas en Javascript/Typescript.
                                </p>
                                <p>
                                    Frontend: Single Page Application, HTML, CSS, Bootstrap, NodeJs,
                                    Javascript y React.
                                </p>
                            </div>
                        </Container>
                    </>
                )
            }
            {
                action === 'M' && (
                    <Marcas onVolver={onVolver} onRegistrarM={onRegistrarM} onActualizarM={onActualizarM}></Marcas>
                )
            }
            {
                action === 'P' && (
                    <Pantallas onVolver={onVolver} onRegistrarP={onRegistrarP} onActualizarN={onActualizarP}></Pantallas>
                )
            }
            {
                action === 'NP' && (
                    <RegistroP onPantallas={onPantallas} onVolver={onVolver} item={item}></RegistroP>
                )
            }
            {
                action === 'NM' && (
                    <RegistroM onMarcas={onMarcas} item={item}></RegistroM>
                )
            }
        </>
    );
}