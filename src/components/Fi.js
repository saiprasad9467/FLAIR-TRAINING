import React from 'react'
import axios from "axios";
//import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

function Fi() {
  const [data, setData] = useState([{}])
  const [search, setSearch] = useState('')
  //const [del, setdel] = usestate([])
  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then((res) => {
        setData(res.data)
      })
  }
  useEffect(() => {
    getData();
  }, []);
  const del = (indexv) => {
    const a = data.filter((index, y) => y !== indexv)
    setData(a)
  }

  return (
    <div className="App">
      <h1><i>Search Here By ID</i></h1>
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <hr />
      <table border="2px" >

        <tr>

          <td>
            <h2><i>AlbumId</i></h2>
          </td>
          <td>
            <h2><i> Id</i></h2>
          </td>
          <td>
            <h2><i> Title</i></h2>
          </td>
          <td>
            <h2><i>  Url</i></h2>
          </td>
          <td>
            <h2><i> ThumbnailUrl</i></h2>
          </td>
          <td>
            <h2><i> Delete</i></h2>
          </td>

        </tr>



        {data.filter(x => {
          if (search == "") {
            return x;
          }
          else if (x.id == search) {
            return x;
          }
          
        })

          .map((x, index) =>
            <tr>
              <td>{x.albumId}</td>
              <td>{x.id}</td>
              <td>{x.title}</td>
              <td key={x.id}><a href={x.url}>{x.url}</a></td>
              <td><a href={x.thumbnailUrl}>{x.thumbnailUrl}</a></td>
              <td><button  onClick={() => del(index)}>Delete</button></td>
            </tr>
          )}
      </table>
    </div>
  );
};

export default Fi;