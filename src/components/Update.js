import { axios } from 'axios';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../styles/Update.css';

const Update = () => {
    const { id } = useParams();

    const userId = id;

    console.log("UserId ", userId)

    const [dateLastActivity, setLastActivityDate] = useState('');
    
    const history = useHistory();

    


    const handleSubmit = async (e)=>{
        e.preventDefault();
        
       await axios.put(`https://localhost:5001/api/UserRegistration`, 
            {
                userId,
                dateLastActivity
            }).then(()=>{
                history.push('/');
            })
    }

    return (  
        <div className="update">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <label >User ID:</label>
                <input 
                    type="number" 
                    value={userId}
                    disabled
                />
                <label>Registration Date</label>
                <input 
                    type="date" 
                    disabled
                    // value={dateRegistration}
                    // onChange={(e) => setRegistrationDate(e.target.value)}
                />
                <label>Last Activity Date</label>
                <input 
                    type="date"
                    value={dateLastActivity}
                    onChange={(e)=> setLastActivityDate(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}
 
export default Update;