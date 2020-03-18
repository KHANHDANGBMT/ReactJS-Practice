import React, { Component } from 'react';
import './Blog.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from '../Blog/FullPost/FullPost';

class Blog extends Component {
    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: "/new-post",
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                    }}>New Post
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/post/:id" exact component={FullPost} />
                </Switch>

            </div>
        );
    }
}

export default Blog;