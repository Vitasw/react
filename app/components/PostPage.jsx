import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

function PostPage(props) {
    let fPost = undefined;
    props.posts.every(function(post){
       if (post.id==props.match.params.id){
           fPost = post;
           return false;
       }
       return true;
    });

    if (!fPost){
        return (
            <div>
                <Link to="/">Назад</Link>
                <h2>Пост не найден</h2>
            </div>
        )
    }

    return (
        <div>
            <Link to="/">Назад</Link>
            <h1>{fPost.name}</h1>
            <div>{fPost.text}</div>
        </div>
    );
}

const mapStateToProps = store => { return {posts: store}; };

export default connect(mapStateToProps)(PostPage);