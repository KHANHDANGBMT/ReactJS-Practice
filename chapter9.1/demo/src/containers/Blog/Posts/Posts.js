import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        })
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
                console.log(updatedPost);
            })
            .catch(er => {
                console.log(er);
                //this.setState({error: true});
            })
    }

    render() {
        let posts = <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Something went wrong!!!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post
                    title={post.title}
                    key={post.id}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}></Post>
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