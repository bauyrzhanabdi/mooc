import {Card, CardGroup, Col, Row} from "react-bootstrap";
import Link from 'next/link';
import styles from './Cards.module.scss';
const Cards = () => {
    const data = [
        {
            title: 'title 1',
            text: 'text 1',
            href: '/all'
        },
        {
            title: 'title 2',
            text: 'text 2',
            href: '/all'
        },
        {
            title: 'title 3',
            text: 'text 1',
            href: '/all'
        },
        {
            title: 'title 4',
            text: 'text 1',
            href: '/all'
        },
        {
            title: 'title 5',
            text: 'text 1',
            href: '/all'
        }
    ];

    return (
        <Row xs={1} md={3} className={'g-4'}>
                {data.map((card, idx) => {
                    return (
                        <Col>
                            <Card className={styles.card}>
                                <Card.Img variant={'top'} src={'./assets/card.jpg'}/>
                                <Card.Body>
                                    <Card.Title className={styles.title}>{card.title}</Card.Title>
                                    <Card.Text>{card.text}</Card.Text>
                                    <hr />
                                    <Link href={`/course/${idx}`}><a className={styles.goTo}>Go to course</a></Link>
                                </Card.Body>
                            </Card>
                        </Col>)
                })}
        </Row>
    )
}

export default Cards;