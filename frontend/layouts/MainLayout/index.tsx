import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import React from "react";
import Head from "next/head";
import {Container} from "react-bootstrap";
import SpaceBlock from "../../components/SpaceBlock";
// @ts-ignore
const MainLayout = ({children}) => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
                      rel="stylesheet"/>
                <title> MOOC </title>
            </Head>
            <NavBar/>
            <Container className='min-height-150 d-flex flex-column'>
                <SpaceBlock height={'50px'}/>
                {children}
            </Container>
            <Footer/>
        </div>
    )
}
export default MainLayout;
