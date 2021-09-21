import axios from 'axios';
import { useState } from "react";
import {useHistory, useParams} from "react-router-dom";
import "../styles/Create.css";

const Create = () => {
    const [userId, setUserId] = useState('');
    const [dateRegistration, setRegistrationDate] = useState(Date.now());

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { userId, dateRegistration};

        console.log(blog.UserId);

        axios.post(`https://localhost:5001/api/UserRegistration`, 
            { 
                userId: blog.userId,
                dateRegistration: blog.dateRegistration,
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }).then(()=>{
                history.push('/');
            });
    }

    return ( 
        
        <div className="create">
            <h2>Add new user</h2>
            <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input 
                    type="number" 
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <label>Registration Date</label>
                <input 
                    type="date" 
                    value={dateRegistration}
                    onChange={(e) => setRegistrationDate(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default Create;