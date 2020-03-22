import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.props.history.push('/posts/' + id);
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                console.log(response);
                const posts = response.data.slice(0, 4);
                const updatedPost = posts.map(post => {
                    return {
                        ...post,
                        author: "Khanh"
                    }
                })
                this.setState({
                    posts: updatedPost
                })
            })
            .catch(er => {
                console.log(er);
            })
    }

    render() {
        let posts = <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Something went wrong!!!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                   // <NavLink to={'/posts/' + post.id} key={post.id}>
                        <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler( post.id )} />
                        
                    //</NavLink>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>

        );
    }
}

export default Posts;