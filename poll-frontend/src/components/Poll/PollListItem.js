import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Button from 'react-bootstrap/Button';


const PollListItem = ({item}) => {

    const [polls, setPolls] = useState([])


    const fetchOptions = async (id) => {
        let {data} = await axios.get(`http://localhost:8000/choice/?poll=${id}`);
        console.log('poll data:::', data);
        
        setPolls(data)
    }

    useEffect(() => {
        if (item.poll_type === 0) {
            fetchOptions(item.id)
        }

    }, [])



    return (
        <div style={{marginTop:"20px"}}>
        <div>
        <span>
            <img src={item.poll_image} alt={item.question_text} height={35} width={35}/>
        </span>{item.question_text}</div>

{polls && polls.length > 0 ?<div>
        <p>
        {/* <Button type="submit" variant="outline-primary" size="lg" style={{color: "#195998" , fontWeight: "600", fontSize: "20px", alignItems:"center", justifyContent:"center"}}> */}
            {polls.map((v) => <button type="submit" variant="outline-primary" size="lg" style={{color: "#195998" , fontWeight: "600", fontSize: "20px", alignItems:"center", justifyContent:"center"}} key={v.id}>{v.choice_text}</button>)}
        {/* </Button> */}
        </p>

</div> : ""}
        
        </div>
    )
}

export default PollListItem;