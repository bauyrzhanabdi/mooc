import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/scss/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {ToastContainer} from 'react-toastify';
import {Provider} from "react-redux";
import {store} from '../redux/store'
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import MainLayout from "../layouts/MainLayout";
import {SkeletonTheme} from "react-loading-skeleton";
import '../components/InstructorSidebar/sidebar.css'
// @ts-ignore
function MyApp({Component, pageProps}) {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SkeletonTheme color={'#eaeaea'} highlightColor={'#FFF'}>
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                    <ToastContainer/>
                </SkeletonTheme>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;