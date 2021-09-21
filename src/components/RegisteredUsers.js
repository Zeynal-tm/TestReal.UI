import axios from 'axios';
import { useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import '../styles/RegisteredUsers.css';

const RegisteredUsers = ({ blogs }) => {
  
  const history = useHistory();

const handleDelete = (event) =>{

  const id = event.target.id;
  
  axios.delete(`https://localhost:5001/api/UserRegistration/` + id)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  }).then(() => {
    // history.push("/");
    window.location.reload();
  }) 
}

  return (
    <div>
      <div className="create">
        <button>
          <Link to={`/create`}>
              Create
          </Link>
        </button>
      </div>,
        <div className="blog-list">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '50%'}}>
            <h2>User Id</h2>
            <h2>Registered Date:</h2>
            <h2>Last Activated Date: </h2>
          </div>
        { blogs.map((blog) => (
          <div className="blog-preview" key={blog.userId} >
            <Link to={`/${blog.userId}`} style={{ display: 'flex', justifyContent: 'space-between', width: '50%'}}>
              <h2 > {blog.userId}  </h2>
              <h2 >  { blog.dateRegistration }    </h2>
              <h2 > { blog.dateLastActivity }  </h2>
            </Link>
            <button id= {blog.userId} onClick={handleDelete} >Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default RegisteredUsers;