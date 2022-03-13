import CreateLesson from "../../../components/course/CreateLesson";
import withAuth from "../../../hoc/withAuth";

const CreateLessonPage = () => {
    return (
        <>
            <CreateLesson />
        </>
    )
}
export default withAuth(CreateLessonPage);