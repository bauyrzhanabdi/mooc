import CourseSideBar from "../../components/CourseSidebar";
import styles from '../../components/course/CreateCourse/course.module.scss';
const CourseLayout = ({children}) => {
    console.log(children);
    console.log("say sth")
    return (
        <div className={styles.course__container}>
            <CourseSideBar />
            {children}
        </div>
    )
}
export default CourseLayout;