import React, { Component } from 'react'; 
import './Blog.css';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';


class Blog extends Component {
    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" render={()=><h1>Home</h1>}/>
            </div>
        );
    }
}

export default Blog;