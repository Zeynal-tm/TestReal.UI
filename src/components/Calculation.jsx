import axios from "axios";
import { useState } from "react";

const Calculation = () => {
    
    const [rollingRetentionDay, setRollingRetentionDay] = useState(1);
    const [res, setRes] = useState();

    async function result(){
        const { data } = await axios.get(`https://localhost:5001/api/Calculation/${rollingRetentionDay}`);
        console.log(data)
        setRes(data);
    }
    
    return ( 
        <div>
            <input 
                type="number" 
                value={rollingRetentionDay}
                onChange={(e) => setRollingRetentionDay(e.target.value)}
            />
            <button onClick={result}>Calculate</button>

            
        
            
            
        </div>
     );
}
 
export default Calculation;