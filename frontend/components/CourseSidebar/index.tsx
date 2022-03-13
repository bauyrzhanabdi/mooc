import Link from 'next/link'
import styles from './sidebar.module.scss'
import {useRouter} from "next/router";
const CourseSideBar = () => {
    const router = useRouter();
    const path = router.basePath + '/course/' + router.query.id;
    console.log(path)
    return (
        <div className={styles.sidebar} >
            <ul className={styles.ul}>
                <li className={styles.ul}><Link href={path + '/info'}>Course Home</Link></li>
                <li><Link href={path+ '/syllabus'}>Syllabus</Link></li>
                <li><Link href={path + '/lecture-videos'}>Lecture Videos</Link></li>
                <li><Link href={path + '/readings'}>Readings</Link></li>
                <li><Link href={path + '/lecture-slides-code'}>Lecture Slides and Code</Link></li>
                <li><Link href={path + '/download-course-materials'}>Download Course Materials</Link></li>
            </ul>
        </div>
    )
}
export default CourseSideBar;