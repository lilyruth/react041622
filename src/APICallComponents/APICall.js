import { useState, useEffect } from 'react';
import GetPosts from './GetPosts';

const APICall = () => {

 const [users, setUsers] = useState([]);
 const [listActive, setListActive] = useState(true);
 const [name, setName] = useState();
 const [user, setUser] = useState(null);
 const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/users');
 
 useEffect(() => {
  fetch(url)
    .then(response => response.json())
    .then(users => {
      let usernames = users.map(user => ({ username: user.username, id: user.id }))
      setUsers(usernames);
    })
}, []);

const changeHandler = e => {

 setUser(e.target.id);
 setName(e.target.innerText);
 setListActive(false);

}

const returnHome = () => setListActive(true);

 return (
   <>
     <div className={ listActive ? "list" : "none"}>

     {users.map(user => <h3 className="user" id={user.id} key={user.id} onClick={changeHandler}>{user.username}</h3>)}
     </div>
    
       
       <div className={listActive ? "none" : "posts"}>
         <GetPosts name={name} user={user} />
       <button onClick={returnHome}>Return home</button>  
     </div>
     </>
 )

}

export default APICall;