import withAuth from "../../hoc/withAuth";
import InstructorLayout from "../../layouts/InstructorLayout";
import Profile from "../../components/Profile";

const InstructorPage = () => {
    return (
        <>
            <Profile />
        </>
    )
}
InstructorPage.Layout = InstructorLayout;
export default withAuth(InstructorPage);