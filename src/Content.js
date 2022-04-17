import { useState, useEffect } from 'react';

let url = 'https://jsonplaceholder.typicode.com/users';

const Content = () => {
 
 const [users, setUsers] = useState([]);
 const [listActive, setListActive] = useState(true);
 const [name, setName] = useState();
 const [posts, setPosts] = useState(null);
 const [user, setUser] = useState(null);

 useEffect(() => {
  fetch(url)
  .then(response => response.json())
  .then(users => {
   let usernames = users.map(user => ({username: user.username, id: user.id}))
   setUsers(usernames);
  })
 }, []);
 
 let  postsUrl = `${url}/${user}/posts`

 useEffect(() => {
  if (user !== null)
  fetch(postsUrl)
  .then(response => response.json())
  .then(response => setPosts(response))
 
 }, [user])
 
 const changeHandler = e => {

  setUser(e.target.id);
  setName(e.target.innerText);
  setListActive(false); 
  console.log(posts)
 }

 const returnHome = () => setListActive(true); 
 
 let list;

 if (posts !== null) {
   list = posts.map(item => (
     <div key={item.id} >
     <h3>{item.title}</h3>
     <div className='post-body'>{item.body}</div>
     </div>
   ))
 }
 
 return ( 

 <div className="content">

  <div className={ listActive ? "list" : "none"}>

  {users.map(user => <h3 className="user" id={user.id} key={user.id} onClick={changeHandler}>{user.username}</h3>)}
  </div>
 
  <>
    <div className={listActive ? "none" : "posts"}>
      {posts === null ? ' ' : <h2>{name}</h2>}
      {posts === null ? 'Loading' : list } 

    
      <button onClick={returnHome}>Return home</button>  
  </div>
  </>
 </div>

 )
}

export default Content;