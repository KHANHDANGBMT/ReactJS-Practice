import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = (props) => (
    <div>
        <h1>
           Oop, something went wrong.
        </h1>
        <p>Go to <Link href="/"><a>Going back</a></Link></p>
    </div>
);

export default errorPage;