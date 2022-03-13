import courses from '../../../../data/courses.json';
import styles from './lectureVideos.module.scss';
import withAuth from "../../../../hoc/withAuth";
import CourseLayout from "../../../../layouts/CourseLayout";
import {useRouter} from "next/router";
const Component = () => {
    const router = useRouter();
    const pathGenerator = (id: number) => {
        return router.basePath + '/course/' + router.query.id + '/lecture-videos/' + id;
    }
    return (<div>
            <h2>Video list</h2>
            <br/>
            <div>
                {courses.courses.map((course, idx) => {
                    return (
                        <a className={styles.medialisting} href={pathGenerator(course.id)}>
                            <img src={course.url} />
                            <p>{course.name}</p>
                        </a>

                    )
                })}
            </div>
        </div>
    )
}
Component.Layout = CourseLayout;
export default withAuth(Component);