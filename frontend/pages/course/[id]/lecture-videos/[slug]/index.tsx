import CourseSideBar from "../../../../../components/CourseSidebar";
import SpaceBlock from "../../../../../components/SpaceBlock";
import CoursePlayer from "../../../../../components/course/CoursePlayer";
import styles from '../../../course.module.scss';
import CourseInfo from "../../../../../components/course/CourseInfo";
import CourseComments from "../../../../../components/course/CourseComments";
import {Container} from "react-bootstrap";
import withAuth from "../../../../../hoc/withAuth";
import CourseLayout from "../../../../../layouts/CourseLayout";

const Course = (props: any) => {
    return (
        <>
            {/*<CourseSideBar />*/}
            {/*<div className={styles.course__container}>*/}
                {/*<CourseSideBar />*/}
                <Container className={styles.course_page_container}>
                    <CoursePlayer />
                    <CourseInfo />
                    <CourseComments />
                </Container>
            {/*</div>*/}
        </>
    )
}
Course.Layout = CourseLayout;
export default withAuth(Course);