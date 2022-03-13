import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {toast} from "react-toastify";

const CreateLesson = () => {
    const [inputList, setInputList] = useState([
        {topic: "", url: "", description: "",}
    ]);
    const handleAddClick = () => {
        setInputList([...inputList, {topic: "", url: "", description: "",}]);
    }
    const handleRemoveClick = (i: number) => {
        let newInputList = [...inputList];
        newInputList.splice(i, 1);
        setInputList(newInputList);
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        toast.success('Successfully added lessons!', {
            position: 'bottom-center'
        });
    }
    const handleChange = (i: number, e: any) => {
        let formValues: any = [...inputList];
        formValues[i][e.target.name] = e.target.value;
        setInputList(formValues);
    }
    return (
        <div>
            <h2 className={'d-flex justify-content-center'}> Create Lessons Page</h2>
            <Form onSubmit={handleSubmit} className="form-group">
                {inputList.map((element: any, i) => {
                    return (
                        <div className={"mb-5"}>
                            <h4>Lesson {i + 1}: </h4>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicName">
                                <Form.Label>Lesson Topic</Form.Label>
                                <Form.Control name="topic" type="text" placeholder="" value={element.topic} onChange={(e) => handleChange(i, e)}/>
                            </Form.Group>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Upload URL: </Form.Label>
                                <Form.Control name="url" type="text" value={element.url} onChange={(e) => handleChange(i, e)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="floatingTextarea2">
                                <Form.Label>Additional Information</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name={"description"}
                                    placeholder="Leave additional info about lesson here"
                                    style={{height: '100px'}}
                                    value={element.description}
                                    onChange={(e) => handleChange(i, e)}
                                />
                            </Form.Group>
                            <Col className={'d-flex justify-content-end'}>
                                {i ? <Button
                                    variant={'danger'}
                                    onClick={() => handleRemoveClick(i)}
                                >
                                    Remove Lesson
                                </Button> : null}
                            </Col>

                        </div>
                    )
                })}
                <Row>
                    <Col>
                        <Button
                            variant={'success'}
                            // type={'button'}
                            onClick={handleAddClick}
                        >
                            +Add Lesson
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            variant={'primary'}
                            className={'m-3'}
                            type={'submit'}
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}
export default CreateLesson;