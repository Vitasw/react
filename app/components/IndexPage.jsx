import React from 'react';
import BlogForm from './Form.jsx';
import Posts from './Posts.jsx';

function IndexPage(props) {
    return (
        <div>
            <BlogForm/>
            <Posts/>
        </div>
    );
}

export default IndexPage;