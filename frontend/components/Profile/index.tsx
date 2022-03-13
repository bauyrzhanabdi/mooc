import styles from './Profile.module.scss';

const Profile = () => {
    const info = [
        {name: 'login', value: 'instructor', type: 'text'},
        {name: 'name', value: 'Mukhtar', type: 'text'},
        {name: 'surname', value: 'Abenov', type: 'text'},
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
    return (
        <div className={styles.instructorPage}>
            <div className={styles.instructor_info__container}>
                <table className={styles.instructor_table}>
                    <tbody>
                    {info.map((item, idx) => (
                        <tr className={styles.instructor_tr} key={idx}>
                            <th className={styles.instructor_th}>{item.name}</th>
                            {renderInput(item)}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className={styles.instructor_info__avatar}>
                    <p> 3 x 4</p>
                    <p>Photo</p>
                </div>
            </div>
            <button className={'btn btn-primary btn-sm ' + styles.btn}>
                Save
            </button>
        </div>
    )
}
export default Profile;