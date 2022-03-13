import React from 'react';
import App from '../components/App';
import withAuth from '../hoc/withAuth';
const Index = () => {
    return (
        <>
            <App/>
        </>
    )
}

export default withAuth(Index);