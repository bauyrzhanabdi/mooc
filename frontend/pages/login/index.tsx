import * as React from 'react';
import {Button, Form, Container, Row, Col} from "react-bootstrap";
import {login, selectIsLoggedIn} from "../../redux/auth/slice";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import Link from "next/link";
import {useRouter} from "next/router";
import useAuth from "../../utils/useAuth";
import {toast} from "react-toastify";

const Login: React.FC = (props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    // const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const token = useAuth();
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleSubmitLogin = (e: any) => {
        e.preventDefault();
        // dispatch(login({
        //     username: user.username,
        //     password: user.password
        // }));
        localStorage.setItem('token', "huguita")
        toast.success("Logged In!",{position: 'bottom-center'})
    };
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    if (token) {
        router.push("/");
        return null;
    }
    return (
        <Container>
            <Row className={'d-flex justify-content-center'}>
                <Col md={6}>
                    <Form onSubmit={handleSubmitLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" placeholder="Enter username" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" onChange={handleChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <p className="text-center pt-2">
                            Not yet registered? <Link href="/registration">Register</Link>
                        </p>
                        <p className="text-center">
                            <Link href="/forgot-password">Reset Password</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Login;