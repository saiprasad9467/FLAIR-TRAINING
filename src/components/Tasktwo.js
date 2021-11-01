import react, { Component } from 'react'
import axios from 'axios'

class Tasktwo extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            error:''
        }}
        componentDidMount(){
            axios.get(`https://jsonplaceholder.typicode.com/albums`)
            .then(res=>{
                this.setState({
                    posts:res.data
                });
            console.log(res.data)
            })
            .catch(error=>{
                this.setState({
                    error:error.message
                })
            })
        }
        todelete=(id)=>{
            const row=this.state.posts.filter(item =>item.id!==id)
            this.setState({
                posts:row
            })
        }

        render(){
            return(
                <div>    
                <div>
                        <table border="2px" >
                            <tr>
                                <td>
                                    <h2>userid</h2> 
                                </td>
                                <td>
                                   <h2> id</h2> 
                                </td>
                                <td>
                                  <h2> Title</h2>
                                </td>
                                <td>
                                    <h2>delete</h2>
                                </td>
                                <td>
                                    <h2>update</h2>
                                </td>
                             </tr>
                            {this.state.posts.map(post=><tr><td>{post.userId}</td> <td>{post.id}</td> <td>{post.title}</td>
                               <td> <button>delete</button></td>
                              <td>  <button >update</button></td></tr>)}   
                        </table>
                </div>
                <center>
                <table border="2px">
                <input type="text"
                 placeholder="id"
                ></input> <br/> <br/>
                <input type="text"
                 placeholder="userId">
                     </input> <br/> <br/>
                <input type="text" 
                placeholder="title">
                    </input> <br/> <br/>
                  <button >update data</button>
                  </table>
                  </center>
                </div>
                
            )
        }
    
}
export default Tasktwo