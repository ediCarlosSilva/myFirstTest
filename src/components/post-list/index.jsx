import React from 'react';

import Post from '../../components/post';
import './style.css';

const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};

export default function PostList({ posts, users }) {

    return (
        <div className='post__list--container'>
            {

                posts && users && posts.filter(post => post.id !== 1).map(post => {
                    
                    let user;

                    for (let i = 0; i < users.length; i++) {
                        if (users[i].id === post.userId) {
                            user = users[i];
                            break;
                        }
                    }
                    return <Post key={post.id} post={post} user={user} />;
                })
            }
        </div>
    )
}