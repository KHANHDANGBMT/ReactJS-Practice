import React from 'react';

import User from '../../Components/User';

const authIndexPage = (props) => (
    <div>
        <h1>
            The Auth Index Page - {props.appName}
        </h1>
        <User age={20} name="hello" />
    </div>
);
authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Supper App(Auth)' })
        }, 1000)
    })
    return promise;
}

export default authIndexPage;