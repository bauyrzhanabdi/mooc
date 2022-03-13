import styles from './coursePlayer.module.scss'
import VideoPlayer from "../../VideoPlayer";
const CoursePlayer = () => {
    return (
        <div className={styles.player}>
            <VideoPlayer url={'https://www.youtube.com/embed/VGirvgDjKpI'}/>
            {/*    https://www.youtube.com/embed/eI4an8aSsgw*/}
        </div>
    )
}
export default CoursePlayer;