import InstructorSideBar from "../../components/InstructorSidebar";
import styles from './instructor.module.scss';
const InstructorLayout = ({children}) => {
    return (
        <div className={styles.instructor__container}>
            <InstructorSideBar />
            {children}
        </div>
    )
}
export default InstructorLayout;