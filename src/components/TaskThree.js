import React,{useState} from 'react'
import axios from 'axios'
     
const[posts,setPosts]=useState('')

const getData=()=>{
    axios.get('https://jsonplaceholder.typicode.com/albums')
    .then(res=>{
            setPosts(res.data)
    })
}
useEffect(() => {
    getData();
  }, []);
function TaskThree() {
    return (
        <table borderradius="1px">
           <tr><td>Userid</td>
           <td>id</td>
           <td>title</td>
           </tr>
           setPosts.map({<tr><td>{post.id}</td> <td>{post.userid}</td> <td>{post.title}</td></tr>})
        </table>
    )
}

export default TaskThree
