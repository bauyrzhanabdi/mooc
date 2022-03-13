import {selectIsLoggedIn, logout} from "../../../redux/auth/slice";
import {ButtonGroup, Button} from "react-bootstrap";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "../../../utils/hooks";
import styles from './authButtons.module.scss';
import SpaceBlock from "../../SpaceBlock";
import useAuth from "../../../utils/useAuth";
const authButton = () => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    const user = useAppSelector((state) => state.auth.user);
    const router = useRouter();
    const token = useAuth();
    const dispatch = useAppDispatch();
    const toGo = (route: string) => {
        router.push(route);
    }
    if (!token) {
        return (
            <ButtonGroup>
                <button type="button" className={styles.login} onClick={() => toGo('/login')}>Login</button>
                <button type="button" className={styles.register} onClick={() => toGo("/registration")}>Register</button>
            </ButtonGroup>
        )
    } else {
        return (
            <div className="d-flex align-items-baseline">
                {/*<p>Welcome, {user.username}</p>*/}
                <button className={styles.logout} onClick={() => dispatch(logout())}>Logout</button>
            </div>
        )
    }
}
export default authButton;