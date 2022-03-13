import {useEffect} from "react";
import {getUser} from "../../redux/user/slice";
import {useAppDispatch, useAppSelector} from "../../utils/hooks";
import withAuth from "../../hoc/withAuth";

// profile page
const UserIndex = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user);
    useEffect(() => {
        dispatch(getUser());
    }, []);
    return (
        <>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </>
    )
}
export default withAuth(UserIndex);