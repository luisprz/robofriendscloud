import React from 'react';
import Card from './Card';

/*
const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return (
        <Card 
        key={robots[i].id} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}/>
    );
    })
    return(
        <div>
            {cardArray}   
        </div>

    );
}
*/

/* if (true) { //deberia funcionar en la build en produccion no se cae la app klk
    throw new Error('Nooooo!');
}
 *///qlq
const CardList = ({ robots }) => {
    return (
        <div>
            {
                //Mejorado
                robots.map((user, i) => {
                    return (
                        <Card
                            key={robots[i].id}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email} />
                    );
                })
            }
        </div>

    );
}

export default CardList;