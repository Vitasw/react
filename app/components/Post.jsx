import React from 'react';
import { Link } from 'react-router-dom';

function Post(props){
    return (
        <div className="post">
            <h2 className="post__name">
                <Link to={`/post/${props.comment.id}`}>{props.comment.name}</Link>
            </h2>
            <div className="post__text">{props.comment.text}</div>
        </div>
    );
}

export default Post;