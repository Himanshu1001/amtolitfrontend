import React from 'react';

import PollListItem from './PollListItem'

const PollList = ({pollList}) => {
    return (
        <div > 
            {pollList.map((v) => <PollListItem key={v.id} item={v} />)}
        </div>
   )
}

export default PollList;