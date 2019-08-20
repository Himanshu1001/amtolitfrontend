import React, {PureComponent} from 'react';
// import axios from '../../axiosInstance';
import axios from 'axios'

import PollList from './PollList';

class Poll extends PureComponent {

    state = {
        pollList: [],
        error: ""
    };

    async componentDidMount() {
        try {
            let pollList = await axios.get(`http://localhost:8000/polls/`);
            this.setState({pollList: pollList.data}, () => {
                console.log('got poll:::', this.state);
                
            })
        }
        catch(ex) {
            console.log('error fetching polls::', ex);
            // this.setState({error: ex})
        }
    }   


    render() {
        const {pollList, error} = this.state;
                
        if (error) return <p>Error: {error}</p>
        return (
            <PollList pollList={pollList} />
        )
    }
}


export default Poll;