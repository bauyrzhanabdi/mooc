import * as React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Link from 'next/link';
import styles from './Footer.module.scss';
const Footer: React.FC = () => {
    return (
        <footer className="footer text-center">
            <Container>
                <Row className="pt-3">
                   <Col className={styles.col}>
                       <h5 className="text-uppercase">Our Team</h5>
                       <Link href={'/about'}><p>About Us</p></Link>
                       <Link href={'/goals'}><p>Team Goals</p></Link>
                   </Col>
                    <Col className={styles.col}>
                        <h5 className="text-uppercase">Contacts</h5>
                        <Link href={'/help'}><p>Help</p></Link>
                        <Link href={'/team'}><p>Team</p></Link>
                        <Link href={'/contacts'}><p>Contacts</p></Link>
                    </Col>
                </Row>
            </Container>
            <div>
                <p className={styles.rights}>© 2021 tu4ka. All Rights Reserved</p>
            </div>
        </footer>
    )
}
export default Footer;