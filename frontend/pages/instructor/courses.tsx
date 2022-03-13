import courses from '../../data/inscourses.json';
import styles from './instructor.module.scss';
import withAuth from "../../hoc/withAuth";
import InstructorLayout from "../../layouts/InstructorLayout";
import {useRouter} from "next/router";
import Image from "next/image";

const Component = () => {
    const added = {
        name: "CSCI 333. Software Engineering",
        url: "/assets/card.jpg",
        id: 4
    }
    const router = useRouter();
    const pathGenerator = (id: number) => {
        return router.basePath + '/course/' + router.query.id + '/lecture-videos/' + id;
    }
    const handleClick = () => {
        router.push('/instructor/create-course');
    }
    return (
        <div className={styles.instructor_courses}>
            <h2>My courses</h2>
            <br/>
            <div>
                {courses.courses.map((course, idx) => {
                    return (
                        <a className={styles.medialisting} href={pathGenerator(course.id)}>
                            <img src={course.url} className={styles.hz}/>
                            <p>{course.name}</p>
                        </a>
                    )
                })}
                {localStorage.getItem('add') === 'true' && (
                    <a className={styles.medialisting} href={''}>
                        <img src={added.url} width={"120"}/>
                        <p>{added.name}</p>
                    </a>)}
            </div>
            <br/>
            <button onClick={handleClick} className={'btn btn-success btn-sm'}>Add course</button>
        </div>
    )
}
Component.Layout = InstructorLayout;
export default withAuth(Component);