import { useState, useEffect } from 'react';

const GetPosts = (props) => {

 const [posts, setPosts] = useState(null);
 let postsUrl = `https://jsonplaceholder.typicode.com/users/${props.user}/posts`;
 let list;

 useEffect(() => {
  if (props.user !== null)
    fetch(postsUrl)
      .then(response => response.json())
      .then(response => setPosts(response))
      console.log(posts)
 }, [props.user]);

 if (posts !== null) {
  list = posts.map(item => (
    <div key={item.id} >
      <h3>{item.title}</h3>
      <div className='post-body'>{item.body}</div>
    </div>
  ))
 }

return (
 <>
 {posts === null ? ' ' : <h2>{props.name}</h2>}
 {posts === null ? 'Loading' : list } 
 </>
)

}

export default GetPosts;