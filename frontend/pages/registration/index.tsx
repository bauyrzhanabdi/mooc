import * as React from 'react';
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import {RingLoader} from "react-spinners";
import {register} from "../../redux/auth/slice";
import {useState} from "react";
import {useAppDispatch} from "../../utils/hooks";
import useAuth from "../../utils/useAuth";
import {useRouter} from "next/router";
// @ts-ignore
const Register = (props) => {
    const router = useRouter();
    const token = useAuth();
    const dispatch = useAppDispatch();
    const [user, setUser] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: '',
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(register({
            username: user.username,
            firstName: user.firstname,
            lastName: user.lastname,
            password: user.password
        }));
    }
    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }
    // reselect for fun
    // const formInfo = createSelector(
    //     (state: RootState) => state.form,
    //     form => form
    // )
    if (token) {
        router.push("/");
        return null;
    }
    return (
        <Container>
            <Row className={'d-flex justify-content-center align-items-center'}>
                <Col md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="username" placeholder="Enter username" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control name="firstname" placeholder="Enter First Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control name="lastname" placeholder="Enter Last Name" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password"
                                          onChange={handleChange}/>
                        </Form.Group>
                        {/* Add Loader */}
                        <Button variant='primary' type="submit">Submit</Button>
                        {/*<RingLoader loading={false} color={'#0d6efd'} size={30}/>*/}
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Register;