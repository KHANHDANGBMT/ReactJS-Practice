import React, { Component } from 'react';
import './Blog.css';
import { Route, Switch, Redirect } from 'react-router';
import {  NavLink } from 'react-router-dom';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import NewPost from './NewPost/NewPost';
const AsyncComponent = asyncComponent (()=>{
    return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
        authenticate: true
    }
    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/posts/"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                activeClassName="my-active"
                                >Post</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: "/new-post",
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                    }}
                                    >New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                <Switch>
                    {this.state.authenticate ? <Route path="/new-post" component={AsyncComponent} />  : null } 
                    <Route path="/posts" component={Posts} />
                    
                    <Route render={()=><h1>Not Found</h1>}/>
                    
                </Switch>

            </div>
        );
    }
}

export default Blog;