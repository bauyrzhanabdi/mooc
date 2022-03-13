import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import styles from './course.module.scss'
import {useRouter} from "next/router";
import {FloatingLabel} from "react-bootstrap";
import {toast} from "react-toastify";

const CreateCourse = () => {
    const [course, setCourse] = useState();
    const router = useRouter();
    const handleSubmit = (e: any) => {
        localStorage.setItem('add', 'true');
        e.preventDefault();
        console.log("hi")
        router.push('/instructor/create-lesson');
        toast.success('Successfully added course!', {
            position: 'bottom-center'
        });
    }
    return (
        <>
            <Form onSubmit={handleSubmit} className="form-group">
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name of the course</Form.Label>
                    <Form.Control type="text" placeholder="Enter course code and title (ex. CSCI 151. Intro to Programming)" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Image: </Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
                <FloatingLabel controlId="floatingTextarea2" label="Add Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <Form.Label>Add Instructors</Form.Label>
                    <Form.Control type="text" placeholder="Enter description of the course" />
                </Form.Group>
                <Row>
                    <Col>
                        <Button
                            variant={'primary'}
                            // onClick={handleSubmit}
                            type={'submit'}
                        >
                            Save
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}
export default CreateCourse;