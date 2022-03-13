import * as React from 'react';
import {Container, Dropdown, Form, FormControl, Image, InputGroup, Nav, Navbar} from "react-bootstrap";
import authButton from "./authButtons";
import styles from './NavBar.module.scss';
const NavBar: React.FC = () => {
    return (
        <Navbar className={styles.navbar} variant={"dark"}>
            <Container>
                <Navbar.Brand href={'/'}><Image className={styles.circled} src={'/assets/akatsuki.png'} width={50} height={50}/></Navbar.Brand>
                <InputGroup className='w-20'>
                </InputGroup>
                <Nav className={styles.nav}>
                    <Nav.Link className={styles.navlink} href='/'>Home</Nav.Link>
                    <Dropdown>
                        <Dropdown.Toggle className={styles.dropdown_toggle}>
                            Courses
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        <Dropdown.Item href='/all'>All</Dropdown.Item>
                        <Dropdown.Item href='/course/1'>CSCI 151</Dropdown.Item>
                        <Dropdown.Item href='/course/1'>CSCI 152</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    <Nav.Link className={styles.navlink} href='/about'>About</Nav.Link>
                    <Form>
                        {authButton()}
                    </Form>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavBar;