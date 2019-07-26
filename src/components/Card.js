import React from 'react'
//import { directive } from '@babel/types';

const Card = ({ name, email, id }) => {
    //const { name, email, id } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            {/* <img alt= 'robots' src={`https://robohash.org/${id}?set=set4`} />  //con gaticos*/} 
            <img alt= 'robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}
export default Card;