import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import { Link } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
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
                    <Link to={'/post/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                            key={post.id}
                        >
                        </Post>
                    </Link>);
            });
        }
        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;