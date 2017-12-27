import React from 'react';
import Post from './Post.jsx';
import store from './../store/store';
import { connect } from 'react-redux';

class Posts extends React.Component {
    render() {
        return (
            <div className="posts">
                {this.props.posts.map(post=><Post comment={post} key={post.id} />)}
            </div>
        );
    }
}

const mapStateToProps = store => { return {posts: store}; };

export default connect(mapStateToProps)(Posts);