import {useRouter} from "next/router";
import useAuth from "../utils/useAuth";
import {FC} from "react";

const withAuth = (Component : any) => {
    /* In Case of Some Layouts */
    const Layout = Component.Layout || EmptyLayout;
    return (props: any) => {
        if (typeof window !== "undefined") {
            const router = useRouter();
            const token = useAuth();

            if (!token) {
                router.replace("/login");
                return null;
            }
            return (<Layout><Component {...props} /></Layout>);
        }
        return null;
    }
}
const EmptyLayout = ({children}) => <>{children}</>;
export default withAuth;