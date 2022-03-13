import styles from './instructor.module.scss'
import withAuth from "../../hoc/withAuth";
import InstructorLayout from "../../layouts/InstructorLayout";

const InstructorPage = () => {
    const info = [
        {name: 'login', value: 'nursultan.n', type: 'text'},
        {name: 'name', value: 'Nursultan', type: 'text'},
        {name: 'surname', value: 'Nazarbayev', type: 'text'},
        {name: 'role', value: 'Senior lecturer at NU', type: 'text'},
        {name: 'about', value: 'about myself', type: 'textarea'},
        // {name: 'totalStudents', value: '123', type: 'number'},
    ];
    const renderInput = (item : any) => {
        return (
            <td>
                <input
                    className={styles.input}
                    name={item.name}
                    value={item.value}
                />
            </td>
        )
    }

    const openAvatarModal = () => {

    }
    return (
        <div className={styles.instructorPage}>
            Q & A
        </div>
    )
}
InstructorPage.Layout = InstructorLayout;
export default withAuth(InstructorPage);