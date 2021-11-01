import react, { Component } from 'react'
import axios from 'axios'

class Taskone extends Component{
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
                })                
            })
            .catch(error=>{
                this.setState({
                    error:error.message
                })
            })
        }
        render(){
            return(
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
                                </tr>
                            {this.state.posts.map(post=><tr><td>{post.userId}</td> <td>{post.id}</td> <td>{post.title}</td></tr>)}
                        </table>
                </div>
            )
        }
    
}
export default Taskone