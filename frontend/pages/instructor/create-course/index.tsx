import CreateCourse from "../../../components/course/CreateCourse";
import withAuth from "../../../hoc/withAuth";

const CreateCoursePage = () => {
    return (
        <>
            <CreateCourse />
        </>
    )
}
export default withAuth(CreateCoursePage);